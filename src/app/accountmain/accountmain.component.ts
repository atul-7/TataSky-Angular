import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accountmain',
  templateUrl: './accountmain.component.html',
  styleUrls: ['./accountmain.component.css']
})
export class AccountmainComponent implements OnInit {

  router:Router;
  constructor(router:Router) {
    this.router=router;
}

  ngOnInit(): void {
  }

}
