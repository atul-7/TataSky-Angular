import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Pack } from '../pack';
import { RechargeService } from '../rechargeService';

@Component({
  selector: 'app-recharge-pack-count',
  templateUrl: './recharge-pack-count.component.html',
  styleUrls: ['./recharge-pack-count.component.css']
})
export class RechargePackCountComponent implements OnInit {

  service:RechargeService;
  count:number=0;
  http:HttpClient;
  createdFlag:boolean=false;
  constructor(private formBuilder:FormBuilder,service:RechargeService,http:HttpClient) {this.service =service;
  this.http = http; }

  ngOnInit(): void {
  }
  rechargeForm = this.formBuilder.group({
    packId:['', [Validators.min(1)]],
  })
  fetch(data:any){
    this.count =0;
    const headers = { 'content-type': 'application/json'}
        const body=JSON.stringify(new Pack(data.packId,0,0,'','',[]));      
        this.http.post<number>('http://localhost:8089/recharge/countrecharge',body,{'headers':headers}).subscribe(data=>{this.count = data; });
        this.createdFlag=true;
  }
}
