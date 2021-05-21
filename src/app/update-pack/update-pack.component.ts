import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pack } from '../pack';
import { PackService } from '../pack-service';

@Component({
  selector: 'app-update-pack',
  templateUrl: './update-pack.component.html',
  styleUrls: ['./update-pack.component.css']
})
export class UpdatePackComponent implements OnInit {
  pack:Pack=new Pack(0,0,0,'','',[]); 
  channels:string[]=[];
  createdFlag:boolean=false;
  service:PackService;
  constructor(private formBuilder:FormBuilder, service:PackService, router:Router) {
    this.service = service;
   }


  ngOnInit(): void {
  }
  packForm = this.formBuilder.group(
    {
      cost:['',[Validators.required, Validators.min(1)]],
      daysValidity:['',[Validators.required]],
      description:['',[Validators.required]],
      planName:['',[Validators.required]],
      channels:['',[Validators.required]]
  })

  update(data:any){
    this.pack=new Pack(0,data.cost,data.daysValidity,data.description,data.planName,this.channels);
    console.log('adding: '+this.pack);
    this.service.updatePack(this.pack);
    this.createdFlag=true;
  }

  updateChannel(data:any){
    console.log(data);
    this.channels.push(data);
  }
}
