import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-reactive',
  templateUrl: './book-reactive.component.html',
  styleUrls: ['./book-reactive.component.css']
})
export class BookReactiveComponent implements OnInit {
  booksForm: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    author: new FormControl(),
    price: new FormControl()
  });
  constructor() { }

  ngOnInit(): void {
  }

  addBook(f: any) {
    
  }
}
