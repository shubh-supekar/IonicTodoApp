import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-archived-todos',
  templateUrl: './archived-todos.page.html',
  styleUrls: ['./archived-todos.page.scss'],
})
export class ArchivedTodosPage implements OnInit {

  public archivedTodos = [];
  constructor(private todoService: TodoServiceService) { }

  ngOnInit() {
    this.archivedTodos = this.todoService.getArchivedTodos();
  }

}
