import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pack } from "./pack";
import { Recharge } from "./recharge";

@Injectable ({
    providedIn:'root'
})

export class PackService{
    http:HttpClient;
    pack:Pack[]=[];
    PopularPack:string[]=[];
    recharges:Recharge[]=[];
    
    constructor(http:HttpClient){this.http=http;}
 
  addPack(pck: Pack) {
    this.pack.push(pck); 
    this.sendPost(pck);   
  }

  updatePack(pck: Pack)
  {
    this.pack.push(pck);
    this.putPost(pck); 
  }

  sendPost(pck: any) {
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(pck); 
    console.log('---------');
    console.log(body);
     this.http.post('http://localhost:8089/pack/add',body,{'headers':headers}).subscribe(
       data=>{
         let dataVal = Object.values(data);
         pck.id=dataVal[0];
       }
     );
    }

    putPost(pck: any) {
      const headers = { 'content-type': 'application/json'};
      const body=JSON.stringify(pck); 
      console.log('---------');
      console.log(body);
       this.http.put('http://localhost:8089/pack/update',body,{'headers':headers}).subscribe(
         data=>{
           let dataVal = Object.values(data);
           pck.id=dataVal[0];
         }
       );
      }

    getPacks():Pack[] {
      return this.pack;
  }

  getPopPacks():string[]{
     return this.PopularPack;
  }

  getRecharges():Recharge[] {
    return this.recharges;
}

  fetchPacks() {
    this.pack=[];
    this.http.get<Pack[]>("http://localhost:8089/pack/by/cost").subscribe(
        data=>{this.convert(data);}
    );
  }

  fetchPacksbyValidity() {
    this.pack=[];
    this.http.get<Pack[]>("http://localhost:8089/pack/by/daysValidity").subscribe(
        data=>{this.convert(data);}
    );
  }
  
  packInfoGrtAmt(cost:string) {
    this.pack=[];
    this.http.get<Pack[]>("http://localhost:8089/pack/by/greaterAmount/" + cost).subscribe(
      (data)=>{this.convert(data);}
    );
  }

  fetchPopularPack() {
    this.PopularPack=[];
    // this.recharges=[];
    this.http.get<string[]>("http://localhost:8089/pack/by/popularPacks").subscribe(
     
    (data)=>{
      this.convert1(data);
      
    } 
    // (dt)=>{this.convert1(dt);}
    );

  }

  convert(data:any){
    for(let p of data){
        let pck = new Pack(p.id,p.cost,p.daysValidity,p.description,p.planName,p.channels);
        this.pack.push(pck);
     }
   }

   convert1(dt:any){
    for(let r of dt){
        // let recharge = new Recharge(r.id,r.account,r.amount,r.daysValidity,r.planDescription,r.planName,r.purchasedDate,r.channels,r.pack,r.active);
        this.PopularPack.push(r);
     }
   }

   

  

}



