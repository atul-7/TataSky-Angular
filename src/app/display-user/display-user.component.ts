import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
  user:User=new User(111,'Shivam',23);

  constructor() { }

  ngOnInit(): void {
  }

}

