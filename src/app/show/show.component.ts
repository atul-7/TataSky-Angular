import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  flag = false;
  trainee1: string="";
  constructor() { }

  ngOnInit(): void {
  }
  fun(trainee:any) {
    // console.log(trainee);
    this.trainee1 = trainee;
  }
}
