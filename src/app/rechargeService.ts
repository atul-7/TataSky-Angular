import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Account } from "./account";
import { RechargeRequest } from "./add-recharge/rechargeRequest";
import { Pack } from "./pack";
import { Recharge } from "./recharge";
import { User } from "./user";

@Injectable({
    providedIn: 'root'
  })
export class RechargeService{
    
    http:HttpClient;
    account:Account = new Account(0,new User(0,'','','','',''),[],'',[],new Pack(0,0,0,'','',[]));
    pack:Pack = new Pack(0,0,0,'','',[]);
    rechRequest:RechargeRequest = new RechargeRequest(this.account,this.pack);
    recharges:Recharge[]=[];
    count:number=0;
    constructor(http:HttpClient) {
        this.http = http;
       }

    addRecharge(accountId: any, packId: any, recharge:Recharge){
        this.getAcc(accountId)
        this.getPack(packId);
        this.rechRequest = new RechargeRequest(this.account, this.pack);
        recharge.account = this.account;
        recharge.pack = this.pack;
        this.post(this.rechRequest, recharge);
      }   
    post(rechRequest: RechargeRequest, recharge:Recharge){
        const headers = { 'content-type': 'application/json'}
        const body=JSON.stringify(rechRequest); 
        this.http.post('http://localhost:8089/recharge/add',body,{'headers':headers}).subscribe(
            data=>{
                let dataVal = Object.values(data);
                recharge.id = dataVal[0];
           }
        )
    }
    getPack(packId: any) {
        this.http.get<Pack>("http://localhost:8089/pack/by/id/"+packId).subscribe((response)=>{this.pack=response});
        console.log(this.pack);
        
    }
    getAcc(accountId: any) {
         this.http.get<Account>("http://localhost:8089/accounts/find/id/"+accountId).subscribe((response)=>{this.account=response});
         console.log(this.account);
         

    }
    update(newRecharge: Recharge) {
        const headers = { 'content-type': 'application/json'}
        const body=JSON.stringify(newRecharge);         
        this.http.put('http://localhost:8089/recharge/update/',body,{'headers':headers}).subscribe(); 
      }
      fetch(id: any) {
        this.recharges=[];
        const headers = { 'content-type': 'application/json'}
        const body=JSON.stringify(new Account(id,new User(0,'','','','',''),[],'',[],new Pack(0,0,0,'','',[]))); 
        this.http.post<Recharge[]>('http://localhost:8089/recharge/rechargeDesc',body,{'headers':headers}).subscribe(
            data=>{
                this.convert(data);
           }
        )

      }
    convert(data: any) {
       for(let r of data){          
           let rech = new Recharge(r.id,new Account(0,new User(0,'','','','',''),[],'',[],new Pack(0,0,0,'','',[])),r.amount,r.daysValidity,r.planDescription,r.planName,r.purchasedDate,r.channels,new Pack(0,0,0,'','',[]),r.active);           
           this.recharges.push(rech);
       }
    }
    getRecharges(): Recharge[] {
        return this.recharges;
      }
      fetchInPeriod(stdate: string | null, endate: string | null) {
        this.recharges=[]; 
        console.log('http://localhost:8089/recharge/rechargesInPeriod/'+ stdate + '/' + endate);       
        this.http.get<Recharge[]>('http://localhost:8089/recharge/rechargesInPeriod/'+ stdate + '/' + endate).subscribe(
            data=>{
                this.convert(data);
           }
        )
      }
        
}

    
