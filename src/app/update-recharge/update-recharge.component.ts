import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Account } from '../account';
import { Pack } from '../pack';
import { Recharge } from '../recharge';
import { RechargeService } from '../rechargeService';
import { User } from '../user';

@Component({
  selector: 'app-update-recharge',
  templateUrl: './update-recharge.component.html',
  styleUrls: ['./update-recharge.component.css']
})
export class UpdateRechargeComponent implements OnInit {
  newRecharge:Recharge = new Recharge(0,new Account(0,new User(0,'','','','',''),[],'',[],new Pack(0,0,0,'','',[])),0,0,'','','',[],new Pack(0,0,0,'','',[]),false);
  service:RechargeService;
  createdFlag:boolean=false;
  constructor(private formBuilder:FormBuilder,service:RechargeService) {
    this.service = service;
   }

  ngOnInit(): void {
  }
  rechargeUpdateForm = this.formBuilder.group({
    id:['', [Validators.required, Validators.min(1)]],
    amount:['',[Validators.min(100)]],
    daysValidity:[''],
    active:['']
  })

  update(data:any){
    this.newRecharge = new Recharge(data.id,new Account(0,new User(0,'','','','',''),[],'',[],new Pack(0,0,0,'','',[])),data.amount,data.daysValidity,'','','',[],new Pack(0,0,0,'','',[]),data.active);
    this.service.update(this.newRecharge);
    this.createdFlag=true;
  }

}
