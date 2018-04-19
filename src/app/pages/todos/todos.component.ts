import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DataService, Todo } from '../data.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Observable<Todo[]>;

  constructor(
    public dataService: DataService,
  ) {
    this.dataService.getTodos().subscribe(res => this.todos = res);
  }

  ngOnInit() {
  }

}
