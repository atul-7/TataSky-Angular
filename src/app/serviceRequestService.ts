import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Account } from "./account";
import { Pack } from "./pack";
import { ServiceRequest } from "./serviceRequest";
import { User } from "./user";

@Injectable({
    providedIn: 'root'
  })
export class ServiceRequestService{
    http:HttpClient;
    account:Account = new Account(0,new User(0,'','','','',''),[],'',[],new Pack(0,0,0,'','',[]));
    constructor(http:HttpClient) {
        this.http = http;
       }
       addService(account:Account,serviceRequest:ServiceRequest){
        serviceRequest.account = this.account;
         this.post(account, serviceRequest );
         
      }  
      post( account: Account, serviceRequest:ServiceRequest){
        const headers = { 'content-type': 'application/json'}
        const body=JSON.stringify(account); 
        console.log(body);
        
        this.http.post('http://localhost:8089/service/addrequest',body,{'headers':headers}).subscribe(
            data=>{
                let dataVal = Object.values(data);
                serviceRequest.id = dataVal[0];
           }
        )

    }
    openService(account:Account,serviceRequest:ServiceRequest){
      serviceRequest.account = account;
       this.post1(account, serviceRequest );
    }  
    post1( account: Account, serviceRequest:ServiceRequest){
      const headers = { 'content-type': 'application/json'}
      const body=JSON.stringify(account); 
      console.log(body);
      
      this.http.post('http://localhost:8089/service/opened/requests/',body,{'headers':headers}).subscribe(
          data=>{
              let dataVal = Object.values(data);
              serviceRequest.id = dataVal[0];
              serviceRequest.requestedDate= dataVal[1];
              serviceRequest.statusOpened= dataVal[2];
         }
      )

  }
   
    }