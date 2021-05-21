import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Recharge } from '../recharge';
import { RechargeService } from '../rechargeService';

@Component({
  selector: 'app-recharges-in-period',
  templateUrl: './recharges-in-period.component.html',
  styleUrls: ['./recharges-in-period.component.css']
})
export class RechargesInPeriodComponent implements OnInit {

  recharges:Recharge[]=[];
  service:RechargeService;
  createdFlag:boolean=false;
  constructor(private formBuilder:FormBuilder,service:RechargeService,public datepipe: DatePipe) {this.service =service }

  ngOnInit(): void {
  }
  rechargeForm = this.formBuilder.group({
    startDate:[''],
    endDate:['']
  })

  fetch(data:any){
    let stdate =this.datepipe.transform(data.startDate, 'MM-dd-YYYY');
    let endate =this.datepipe.transform(data.endDate, 'MM-dd-YYYY');
    this.service.fetchInPeriod(stdate,endate);
    this.recharges = this.service.getRecharges();    
    this.createdFlag =true;
    
  }
}
