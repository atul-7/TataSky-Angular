import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../account';
import { Pack } from '../pack';
import { ServiceRequest } from '../serviceRequest';
import { ServiceRequestService } from '../serviceRequestService';
import { User } from '../user';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {
  newService:ServiceRequest= new ServiceRequest(0,new Account(0,new User(0,'','','','',''),[],'',[],new Pack(0,0,0,'','',[])),'',true);
  account:Account=new Account(0,new User(0,'','','','',''),[],'',[],new Pack(0,0,0,'','',[]));
  createdFlag:boolean=false;
  router:Router;
  service:ServiceRequestService;
  constructor(private formBuilder:FormBuilder,router:Router,service:ServiceRequestService) {
    this.router=router;
    this.service = service;
}

  ngOnInit(): void {
  }
  serviceForm = this.formBuilder.group({
    accountId:['', [Validators.required, Validators.min(1)]],
  })
  add(data:any){
    this.account=new Account(data.accountId,new User(0,'','','','',''),[],'',[],new Pack(0,0,0,'','',[]));
    this.newService=new ServiceRequest(0,new Account(0,new User(0,'','','','',''),[],'',[],new Pack(0,0,0,'','',[])),'',false);
    this.service.addService(this.account,this.newService);
    console.log("new service created");
    this.createdFlag= true;
  }
}
