import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../account';
import { Pack } from '../pack';

import { User } from '../user';
import { UserService } from '../UserService';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  
  user:User=new User(0,'','','','','');
  service:UserService
  router:Router;
  account:Account=new Account(0,new User(0,'','','','',''),[],'',[],new Pack(0,0,0,'','',[]));
  createdFlag:boolean=false;
 
  constructor(private http:HttpClient,service:UserService,private formBuilder:FormBuilder,router:Router) {
    this.service = service;
    this.router=router;
   }

  ngOnInit(): void {
  }

  userForm = this.formBuilder.group({
    
    userName:['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
    firstName:['',[Validators.required,Validators.minLength(2), Validators.maxLength(15),
      Validators.pattern('[a-zA-Z]*')]],
    lastName:['',[Validators.required,Validators.minLength(2), Validators.maxLength(10),
      Validators.pattern('[a-zA-Z]*')]],
    password:['' ,[Validators.required,Validators.minLength(8), Validators.maxLength(20),
      Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8,20}$')]],
   
    role:['',[Validators.required,Validators.minLength(2), Validators.maxLength(15)]], 
  })
 
  add(data:any){
    this.user=new User(data.id,data.userName,data.firstName,data.lastName,data.password,data.role)
    console.log('adding: '+this.user);
   this.service.registerUser(this.user);
    this.createdFlag=true;
  }

}
