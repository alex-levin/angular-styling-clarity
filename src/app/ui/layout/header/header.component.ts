import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerLinks = [
    { link: ['/', 'dashboard'], icon: 'home'},
    { link: ['/', 'settings'], icon: 'cog'},
  ];

  subLinks = [
    { link : ['/', 'dashboard'], label: 'Dashboard' },
    { link : ['/', 'posts'], label: 'Posts' },
    { link : ['/', 'todos'], label: 'Todos' },
    { link : ['/', 'users'], label: 'Users' },
  ];
  
  ngOnInit() {
  }

}
