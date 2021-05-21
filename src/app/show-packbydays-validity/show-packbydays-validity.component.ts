import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pack } from '../pack';
import { PackService } from '../pack-service';

@Component({
  selector: 'app-show-packbydays-validity',
  templateUrl: './show-packbydays-validity.component.html',
  styleUrls: ['./show-packbydays-validity.component.css']
})
export class ShowPackbydaysValidityComponent implements OnInit {
  pack:Pack[]=[];
  
  service:PackService;
  constructor(service:PackService, router:Router) { 
    this.service=service;
  }


  ngOnInit(): void {
    this.service.fetchPacksbyValidity();
    this.pack=this.service.getPacks();
  }

  

}
