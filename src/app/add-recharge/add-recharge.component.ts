import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Account } from '../account';
import { Pack } from '../pack';
import { Recharge } from '../recharge';
import { RechargeService } from '../rechargeService';
import { User } from '../user';
import { RechargeRequest } from './rechargeRequest';

@Component({
  selector: 'app-add-recharge',
  templateUrl: './add-recharge.component.html',
  styleUrls: ['./add-recharge.component.css']
})
export class AddRechargeComponent implements OnInit {

  newRecharge:Recharge = new Recharge(0,new Account(0,new User(0,'','','','',''),[],'',[],new Pack(0,0,0,'','',[])),0,0,'','','',[],new Pack(0,0,0,'','',[]),false);
  service:RechargeService;
  createdFlag:boolean=false;
  constructor(private formBuilder:FormBuilder,service:RechargeService) {
    this.service = service;
   }

  ngOnInit(): void {
  }
  rechargeForm = this.formBuilder.group({
    accountId:['', [Validators.required, Validators.min(1)]],
    packId:[''],
  })

  add(data:any){
    this.service.addRecharge(data.accountId,data.packId,this.newRecharge);
    console.log("new rc done");
    this.createdFlag= true;
  }

}
