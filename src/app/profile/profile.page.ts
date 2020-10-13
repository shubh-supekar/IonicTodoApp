import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: any = {};
  constructor(
    private afstore: AngularFireStorage,
    private authObj: AngularFireAuth,
    private afDB: AngularFireDatabase) { }

ngOnInit() {
/*
    this.afDB.object('user/' + this.authObj.currentUser.uid).snapshotChanges().subscribe((usersnap) => {
      // tslint:disable-next-line: object-literal-key-quotes
      this.user = { 'key' : usersnap.key,  ...usersnap.payload.val() as {} };

    });
*/
  }
  /*
upload(){
    // tslint:disable-next-line: prefer-const
    let file = document.getElementById('avatar').files[0];
    // tslint:disable-next-line: prefer-const
    let ref = this.afstore.ref('upload/' + this.authObj.currentUser.uid + '/' + file.name);
    ref.put(file).then(res => {
      // tslint:disable-next-line: no-shadowed-variable
      ref.getDownloadURL().subscribe(url => {
        this.user.imgURL = url;

      });
    }).catch(e => {
      console.log(e);
    });

  }
  */

/*
  async update()
  {
    this.afDB.object('users/' + this.authObj.currentUser.uid).update(this.user);
  }
*/
}
