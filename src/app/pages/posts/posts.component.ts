import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { DataService, Post } from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Observable<Post[]>;
  post: Post;
  showModal: boolean = false;

  constructor(
    public dataService: DataService,
  ) {
    this.dataService.getPosts().subscribe(res => this.posts = res);
  }

  openModal($event, post) {
    $event.preventDefault();
    this.post = post;
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
    this.post = null;
  }

  ngOnInit() {
  }

}
