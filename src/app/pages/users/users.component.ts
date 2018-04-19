import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DataService, User } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Observable<User[]>;
  user: User;
  showModal: boolean = false;

  constructor(
    public dataService: DataService,
  ) {
    this.dataService.getUsers().subscribe(res => this.users = res);
  }

  openModal($event, user) {
    $event.preventDefault();
    this.user = user;
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
    this.user = null;
  }

  ngOnInit() {
  }

}
