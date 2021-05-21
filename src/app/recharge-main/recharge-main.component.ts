import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recharge-main',
  templateUrl: './recharge-main.component.html',
  styleUrls: ['./recharge-main.component.css']
})
export class RechargeMainComponent implements OnInit {
  router:Router;
  constructor(router:Router) {
    this.router=router;
}

  ngOnInit(): void {
  }

}
