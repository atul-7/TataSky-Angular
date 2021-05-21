import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pack } from '../pack';
import { PackService } from '../pack-service';

@Component({
  selector: 'app-show-packbycost',
  templateUrl: './show-packbycost.component.html',
  styleUrls: ['./show-packbycost.component.css']
})
export class ShowPackbycostComponent implements OnInit {
  pack:Pack[]=[];
  service:PackService;
  constructor(service:PackService, router:Router) { 
    this.service=service;
  }

  ngOnInit(): void {
    this.service.fetchPacks();
    this.pack=this.service.getPacks();
  }

}
