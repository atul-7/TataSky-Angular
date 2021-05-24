import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDto } from '../UserDto';
import { UserService } from '../UserService';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
  user=new UserDto();
  flag:boolean=false;
  router:Router;
  createdFlag:boolean= false;
  
    constructor(router:Router,private service:UserService,private http:HttpClient,private formBuilder:FormBuilder) {
      this.router=router;
     }
    loginForm = this.formBuilder.group({
      id:[''],
      password:['']
    })
    ngOnInit(): void {
    }
    login(data:any){
    
   this.createdFlag=true;
    this.http.get("http://localhost:8089/user/by/id/"+data.id).subscribe(
         response=>{
           let dataVal = Object.values(response);
           console.log(dataVal);
           this.user.password=dataVal[5];
           this.user.role=dataVal[4];
         }
       );
       if(this.user.password==data.password && this.user.role=='Customer'){
         this.flag=true;
         this.router.navigate(['/customer-main']);
       }
  }
  }
  