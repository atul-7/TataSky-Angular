import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pack } from '../pack';

@Component({
  selector: 'app-show-pack-grt-amt',
  templateUrl: './show-pack-grt-amt.component.html',
  styleUrls: ['./show-pack-grt-amt.component.css']
})
export class ShowPackGrtAmtComponent implements OnInit {
  pack:Pack[]=[];
  createdFlag:boolean=false;
  // service:PackService;
  // constructor(service:PackService) { 
  //   this.service=service;
  // }
  constructor(private  formBuilder:FormBuilder, private packClient:HttpClient, router:Router) { }
  packForm = this.formBuilder.group(
    {
      cost:['',[Validators.required, Validators.min(2)]],
  })

  ngOnInit(): void {
    // this.service.packInfoGrtAmt('');
    // this.pack=this.service.getPacks();
  }

 
   
  packInfoGrtAmt(data:any) {
    this.pack=[];
    this.packClient.get<Pack[]>("http://localhost:8089/pack/by/greaterAmount/" + data.cost).subscribe(
    (data)=>{this.convert(data);
    console.log(data);
    }

    );
    this.createdFlag=true;
  }

  convert(data:any){
    for(let p of data){
        let pck = new Pack(p.id,p.cost,p.daysValidity,p.description,p.planName,p.channels);
        this.pack.push(pck);
        
     }
   }

//    getPacks():Pack[] {
//     return this.pack;
// }
  
  
}
