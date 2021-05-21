import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../account';
import { Pack } from '../pack';
import { ServiceRequest } from '../serviceRequest';
import { User } from '../user';

@Component({
  selector: 'app-close-request',
  templateUrl: './close-request.component.html',
  styleUrls: ['./close-request.component.css']
})
export class CloseRequestComponent implements OnInit {
  router:Router;
  serviceRequest:ServiceRequest= new ServiceRequest(0,new Account(0,new User(0,'','','','',''),[],'',[],new Pack(0,0,0,'','',[])),'',false);
  constructor(private formBuilder:FormBuilder,router:Router, private http:HttpClient) { 
   this.router=router;
  }

  ngOnInit(): void {
  }
  serviceForm = this.formBuilder.group({
    serviceId:['', [Validators.required, Validators.min(1)]],
  })
 public serviceInfo(data:any){
   this.serviceRequest= new ServiceRequest(0,new Account(0,new User(0,'','','','',''),[],'',[],new Pack(0,0,0,'','',[])),'',false);
   this.http.get<ServiceRequest>("http://localhost:8089/service/close/by/id/" +data.serviceId).subscribe(
     (response)=>{this.serviceRequest=response}
   ) 
 }
}
