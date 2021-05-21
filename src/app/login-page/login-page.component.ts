import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDto } from '../UserDto';
import { UserService } from '../UserService';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
user=new UserDto();
flag:boolean=false;
router:Router;

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
    // this.service.login(this.user);}
  //   .subscribe(
  //   data => console.log("response received"),
  //   error =>console.log("exception occured") 
  // )
  //     }

  this.http.get("http://localhost:8089/user/by/id/"+data.id).subscribe(
       response=>{
         let dataVal = Object.values(response);
         console.log(dataVal);
         this.user.password=dataVal[5];
         this.user.role=dataVal[4];
       }
     );
     if(this.user.password==data.password && this.user.role=='Admin'){
       this.flag=true;
       this.router.navigate(['/admin-main']);
     }
}
}
