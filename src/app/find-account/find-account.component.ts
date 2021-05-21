import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../account';
import { Pack } from '../pack';
import { User } from '../user';

@Component({
  selector: 'app-find-account',
  templateUrl: './find-account.component.html',
  styleUrls: ['./find-account.component.css']
})
export class FindAccountComponent implements OnInit {
  router: Router;
  account:Account=new Account(0,new User(0,'','','','',''),[],'',[],new Pack(0,0,0,'','',[]));
  constructor(private formBuilder:FormBuilder, private tataSkyAcc: HttpClient, router: Router) {
    this.router = router;
  } 

  
  ngOnInit(): void {
  }
  serviceForm = this.formBuilder.group({
    accountId:['', [Validators.required, Validators.min(1)]],
  })
  public accInfo(data:any) {
    this.account=new Account(0,new User(0,'','','','',''),[],'',[],new Pack(0,0,0,'','',[]));
    this.tataSkyAcc.get<Account>("http://localhost:8089/accounts/find/id/" + data.accountId).subscribe(
      (response)=>{this.account=response}
    );
  }
}
