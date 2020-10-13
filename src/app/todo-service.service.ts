import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { observable, of, throwError, Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
// tslint:disable-next-line: quotemark
import { LoadingController } from "@ionic/angular";


const httpOptions = {

  headers: new HttpHeaders({ 'Content-Type' : 'application.json' })
};

const apiUrl =  'https://127.0.0.1:8000/languages/?format=api';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  private todos = [];
  private archivedTodos = [];


  constructor(public loadCtrl: LoadingController, private http: HttpClient) {}

    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        console.error('An error occurred:', error.error.message);
      } else {
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      return throwError('Something bad happened; please try again later.');
    }


    private extractData(res: Response) {
      // tslint:disable-next-line: prefer-const
      let body = res;
      return body || { };
    }
  getArchivedTodos()
  {
    return this.archivedTodos;

  }

  archivedTodo(todoIndex) {
    // tslint:disable-next-line: prefer-const
    let todoToBeArchived = this.todos[todoIndex];
    this.todos.splice(todoIndex, 1);
    this.archivedTodos.push(todoToBeArchived);



  }

  getTodos()
  {
    return this.todos;
  }

  addTodo(todoText)
  {
    this.todos.push(todoText);
  }

  editTodo(todo, todoIndex)
    {
      this.todos[todoIndex] = todo;

    }

    async presentLoading()
    {
      const loading = await this.loadCtrl.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        duration: 2000
      });
      await loading.present();
         // tslint:disable-next-line: no-trailing-whitespace
       
      const { role, data } = await loading.onDidDismiss();
      console.log('Loading dismissed!');
    }


    getDataUser(): Observable<any> {
      return this.http.get(apiUrl, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError));
    }
  }
