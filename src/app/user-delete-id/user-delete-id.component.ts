import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-user-delete-id',
  templateUrl: './user-delete-id.component.html',
  styleUrls: ['./user-delete-id.component.css']
})
export class UserDeleteIdComponent implements OnInit {
  router:Router;
  createdFlag:boolean=false;
  user:User= new User(0,'','','','','');
  constructor(private formBuilder:FormBuilder,router:Router, private http:HttpClient) { 
   this.router=router;
  }

  ngOnInit(): void {
  }
  userForm = this.formBuilder.group({
    userId:['', [Validators.required, Validators.min(1)]],
  })
  public userInfo(data:any){
    this.http.delete("http://localhost:8089/user/delete/by/id/" + data.userId).subscribe(
    );
      this.createdFlag=true;
  }
}
