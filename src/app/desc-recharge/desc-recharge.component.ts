import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Recharge } from '../recharge';
import { RechargeService } from '../rechargeService';

@Component({
  selector: 'app-desc-recharge',
  templateUrl: './desc-recharge.component.html',
  styleUrls: ['./desc-recharge.component.css']
})
export class DescRechargeComponent implements OnInit {

  service:RechargeService;
  recharges:Recharge[]=[];
  createdFlag:boolean=false;
  constructor(private formBuilder:FormBuilder,service:RechargeService) {this.service =service }

  ngOnInit(): void {
  }
  rechargeForm = this.formBuilder.group({
    accountId:['', [Validators.required, Validators.min(1)]],
  })

  fetch(data:any){
    this.service.fetch(data.accountId);
    this.recharges = this.service.getRecharges();
    this.createdFlag =true;
    
  }


}
