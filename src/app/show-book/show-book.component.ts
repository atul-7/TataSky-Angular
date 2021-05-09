import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book-service';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent implements OnInit {
  bookService: BookService;
  constructor(bookService: BookService, router :Router) {
    this.bookService = bookService;
    
  }

  ngOnInit(): void {
  }

}
