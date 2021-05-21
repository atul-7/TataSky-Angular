import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-main',
  templateUrl: './service-main.component.html',
  styleUrls: ['./service-main.component.css']
})
export class ServiceMainComponent implements OnInit {
  router:Router;
  constructor(router:Router) {
    this.router=router;
}

  ngOnInit(): void {
  }

}
