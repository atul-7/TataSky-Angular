import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RechargeService } from '../rechargeService';

@Component({
  selector: 'app-recharge-in-period-count',
  templateUrl: './recharge-in-period-count.component.html',
  styleUrls: ['./recharge-in-period-count.component.css']
})
export class RechargeInPeriodCountComponent implements OnInit {

  service:RechargeService;
  createdFlag:boolean=false;
  count:number=0;
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
    this.count=0;
      this.http.get<number>('http://localhost:8089/recharge/countRechInPeriod/'+ stdate + '/' + endate).subscribe(
          data=>{
              this.count = data;             
         }
      )
    this.createdFlag =true;
    
  }
}
