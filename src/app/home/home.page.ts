import { Component } from '@angular/core';
import { AlertController, ToastController, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TodoServiceService } from '../todo-service.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoadingController } from '@ionic/angular';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';






@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   public todos = [];
   public loading: any;



  // tslint:disable-next-line: max-line-length
  constructor(private actionSheeterController: ActionSheetController,
              private todoService: TodoServiceService,
              private router: Router,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              private authObj: AngularFireAuth,
              public loadCtrl: LoadingController,
              private afDB: AngularFireDatabase)
  {
    this.loading = this.todoService.presentLoading();
    this.todos = this.todoService.getTodos();
   }


   archiveTodo(todoIndex)
   {
     this.todoService.archivedTodo(todoIndex);
   }


  gotoArchivePage() {

    this.router.navigate(['archived-todos']);
  }

  async openTodoAlert()
  {
    const addAlert = this.alertCtrl.create({
      message: 'Enter Your Todo',
      inputs: [
        {
          type: 'text',
          name: 'AddInputData'
        }
      ],
      buttons: [
        {
          text: 'Cancle'
        },
        {
          text: 'Add',
          handler: async (inputData) =>
          {
            let todoText;
            todoText = inputData.AddInputData;
            this.todoService.addTodo(todoText);
            // tslint:disable-next-line: prefer-const
            let addTodoToast = this.toastCtrl.create({
              message: 'Todo is Added',
              duration: 2000,
              mode: 'md'
            });
            (await addTodoToast).present();
          }
        }]
    });
    (await addAlert).present();
  }


  async editTodo(todoIndex)
  {
    const editAlert = this.alertCtrl.create({
      message: 'edit Your Todo',
      inputs: [
        {
          type: 'text',
          name: 'editInputData',
          value: this.todos[todoIndex]
        }
      ],
      buttons: [
        {
          text: 'Cancle'
        },
        {
          text: 'edit',
          handler: async (inputData) =>
          {
            let todoText;
            todoText = inputData.editInputData;
            this.todoService.editTodo(todoText, todoIndex);
            // tslint:disable-next-line: prefer-const
            let editTodoToast = this.toastCtrl.create({
              message: 'Todo is Edited',
              duration: 2000,
              mode: 'md'
            });
            (await editTodoToast).present();
          }
        }]
    });
    (await editAlert).present();
  }

  async shareActivity() {
    const actionSheet = await this.actionSheeterController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Profile',
        icon: 'person-circle-outline',
        handler: () => {
          this.router.navigateByUrl('/profile');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }, {
        text: 'Logout',
        icon: 'navigate-circle-outline',
        handler: () => {
          this.authObj.signOut().then( () => {
            this.router.navigateByUrl('/login');

          }).catch(e => {
            console.log(e);
          });
        }
      }]
    });
    await actionSheet.present();
  }

}






