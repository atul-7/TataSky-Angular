import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-count-account-in-period',
  templateUrl: './count-account-in-period.component.html',
  styleUrls: ['./count-account-in-period.component.css']
})
export class CountAccountInPeriodComponent implements OnInit {
  createdFlag:boolean=false;
  count:number=0; 
  router:Router;
  http:HttpClient;
  constructor(router:Router,public datepipe: DatePipe,private formBuilder:FormBuilder,http:HttpClient) {
    this.router=router;
    this.http=http;
    
   }

  ngOnInit(): void {
  }
  accountForm = this.formBuilder.group({
    startDate:[''],
    endDate:['']
  })
  fetch(data:any){
     let stdate =this.datepipe.transform(data.startDate, 'MM-dd-YYYY');
     let endate =this.datepipe.transform(data.endDate, 'MM-dd-YYYY');
    this.count=0;
      this.http.get<number>('http://localhost:8089/accounts/count/in/period/'+ stdate + '/' + endate).subscribe(
          data=>{
              this.count = data;             
         }
      )
      this.createdFlag =true;
    }
   
  }

