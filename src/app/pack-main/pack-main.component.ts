import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pack-main',
  templateUrl: './pack-main.component.html',
  styleUrls: ['./pack-main.component.css']
})
export class PackMainComponent implements OnInit {
router:Router;
  constructor(router:Router) { 
    this.router=router;
  }

  ngOnInit(): void {
  }

}
