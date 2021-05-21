import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RechargeService } from '../rechargeService';

@Component({
  selector: 'app-recharge-in-period-revenue',
  templateUrl: './recharge-in-period-revenue.component.html',
  styleUrls: ['./recharge-in-period-revenue.component.css']
})
export class RechargeInPeriodRevenueComponent implements OnInit {

  service:RechargeService;
  createdFlag:boolean=false;
  revenue:number=0;
  http:HttpClient;
  constructor(private formBuilder:FormBuilder,service:RechargeService,public datepipe: DatePipe,http:HttpClient) {
    this.service =service;
    this.http = http;
   }
  ngOnInit(): void {
  }
  rechargeForm = this.formBuilder.group({
    startDate:[''],
    endDate:['']
  })

  fetch(data:any){
    let stdate =this.datepipe.transform(data.startDate, 'MM-dd-YYYY');
    let endate =this.datepipe.transform(data.endDate, 'MM-dd-YYYY');
    this.revenue=0;
    this.http.get<number>('http://localhost:8089/recharge/totalrevenue/'+ stdate + '/' + endate).subscribe(data=>{this.revenue = data;});
    this.createdFlag =true;    
  }

}
