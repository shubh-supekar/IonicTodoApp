import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from './../todo-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.page.html',
  styleUrls: ['./api-test.page.scss'],
})
export class ApiTestPage implements OnInit {


  constructor( public api: TodoServiceService, private http: HttpClient) {
  }
  datauser: any;

apiurl = 'https://jsonplaceholder.typicode.com/todos';

  ngOnInit() {
   // this.getDataUser();
   this.getPost();
  }

  getPost()
  {
    this.http.get(this.apiurl).subscribe( data => {
      console.log(data);
    },  err => {
      console.log(err);

    });
  }




}
