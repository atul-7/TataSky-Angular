import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {
  router:Router;
  createdFlag:boolean=false;
  constructor(private formBuilder:FormBuilder,router:Router, private http:HttpClient) { 
    this.router=router;
   }

  ngOnInit(): void {
  }
  accountForm = this.formBuilder.group({
    accountId:['', [Validators.required, Validators.min(1)]],
  })
  public deleteInfo(data:any){
    this.http.delete("http://localhost:8089/accounts/delete/id/" + data.accountId).subscribe();
      this.createdFlag=true;
  }
}
