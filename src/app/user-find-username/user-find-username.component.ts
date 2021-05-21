import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-user-find-username',
  templateUrl: './user-find-username.component.html',
  styleUrls: ['./user-find-username.component.css']
})
export class UserFindUsernameComponent implements OnInit {
  createdFlag:Boolean=false;
  router:Router;
  user:User= new User(0,'','','','','');
  constructor(private formBuilder:FormBuilder, router:Router, private http:HttpClient) { 
   this.router=router;
  }

  ngOnInit(): void {
  }
  userForm = this.formBuilder.group({
    serviceUsername:['', [Validators.required, Validators.min(1)]],
  })
  public userInfo(data:any){
    this.user= new User(0,'','','','','');
    this.http.get<User>("http://localhost:8089/user/by/username/" + data.serviceUsername).subscribe(
      (response)=>{this.user=response}
    ) 
    this.createdFlag=true;
}
}
