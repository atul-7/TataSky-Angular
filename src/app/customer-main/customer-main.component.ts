import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-main',
  templateUrl: './customer-main.component.html',
  styleUrls: ['./customer-main.component.css']
})
export class CustomerMainComponent implements OnInit {
  router:Router;
  constructor(router:Router) {
    this.router=router;
   }

  ngOnInit(): void {
    this.router.navigate(['/customer-home-main']);
  }

}
