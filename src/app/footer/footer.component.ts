import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  title:string=' in Footer';
  date:Date=new Date();
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{this.date=new Date();},5000);   
  }

}
