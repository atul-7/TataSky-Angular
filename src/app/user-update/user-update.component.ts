import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountTo } from '../accountTo';
import { Pack } from '../pack';
import { User } from '../user';
import { UserService } from '../UserService';
import { UserTo } from '../UserTo';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  service:UserService;
  router:Router;
  createdFlag:boolean=false;
  account:AccountTo= new AccountTo(0);
  user:UserTo=new UserTo(0,'','','','','',this.account);


  constructor(private http:HttpClient,service:UserService,private formBuilder:FormBuilder,router:Router) { 
    this.router=router;
    this.service = service;
  }

  serviceForm = this.formBuilder.group({
    id:['', [Validators.required, Validators.min(1)]],
    username:[''],
    firstName:[''],
    lastName:[''],
    password:[''],
    role:[''],
    account:this.formBuilder.group({
      accountId:[''],
  })
})

  ngOnInit(): void {
  }
  update(data:any){
    this.user=new UserTo(data.id,data.username,data.firstName,data.lastName,data.password,data.role,new AccountTo(data.account.accountId));
    console.log('adding: '+this.user);
   this.service.update(this.user);
    this.createdFlag=true;
  }

}
