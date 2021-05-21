import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Account } from '../account';
import { Pack } from '../pack';
import { RechargeService } from '../rechargeService';
import { User } from '../user';

@Component({
  selector: 'app-count-recharge',
  templateUrl: './count-recharge.component.html',
  styleUrls: ['./count-recharge.component.css']
})
export class CountRechargeComponent implements OnInit {

  service:RechargeService;
  count:number=0;
  createdFlag:boolean=false;
  http:HttpClient;
  constructor(private formBuilder:FormBuilder,service:RechargeService,http:HttpClient) {
  this.service =service;
  this.http = http;
    }

  ngOnInit(): void {
  }

  rechargeForm = this.formBuilder.group({
    accountId:['', [Validators.required, Validators.min(1)]],
  })
  fetch(data:any){
    this.count =0;
    const headers = { 'content-type': 'application/json'}
        const body=JSON.stringify(new Account(data.accountId,new User(0,'','','','',''),[],'',[],new Pack(0,0,0,'','',[])));      
        this.http.post<number>('http://localhost:8089/recharge/userRechCount',body,{'headers':headers}).subscribe(
            data=>{
                this.count = data;             
           }
        )
        this.createdFlag=true;
  }
  
}
