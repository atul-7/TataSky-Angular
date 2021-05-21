import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pack } from '../pack';
import { PackService } from '../pack-service';

@Component({
  selector: 'app-show-popular-pack',
  templateUrl: './show-popular-pack.component.html',
  styleUrls: ['./show-popular-pack.component.css']
})
export class ShowPopularPackComponent implements OnInit {
 pack:string[]=[];
//  pack:Pack[]=[];
//  recharges:Recharge[]=[];
  service:PackService;
  constructor(service:PackService, router:Router) { 
    this.service=service;
  }
  

  ngOnInit(): void {
    this.service.fetchPopularPack();
    // this.recharges=this.service.getRecharges();
    this.pack=this.service.getPopPacks();
  }

}
