import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Account } from '../account';

@Component({
  selector: 'app-count-accounts',
  templateUrl: './count-accounts.component.html',
  styleUrls: ['./count-accounts.component.css']
})
export class CountAccountsComponent implements OnInit {
  constructor(private tataSkyAcc:HttpClient) { }
  NoOfAcc: number = 0;
  ngOnInit(): void {
  }

  public countAcc() {
    this.tataSkyAcc.get<number>("http://localhost:8089/accounts/count/accounts").subscribe(
      (response)=>{this.NoOfAcc=response}
    );
  }
}
