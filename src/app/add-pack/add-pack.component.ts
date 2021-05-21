import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pack } from '../pack';
import { PackService } from '../pack-service';

@Component({
  selector: 'app-add-pack',
  templateUrl: './add-pack.component.html',
  styleUrls: ['./add-pack.component.css']
})
export class AddPackComponent implements OnInit {
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
      daysValidity:['',[Validators.required, Validators.min(1)]],
      description:['',[Validators.required]],
      planName:['',[Validators.required]],
      channels:['',[Validators.required]]
  })

  add(data:any){
    this.pack=new Pack(0,data.cost,data.daysValidity,data.description,data.planName,this.channels);
    console.log('adding: '+this.pack);
    this.service.addPack(this.pack);
    this.createdFlag=true;
  }

  addChannel(data:any){
    console.log(data);
    this.channels.push(data);
  }
}
