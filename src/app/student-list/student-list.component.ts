import { Component, OnInit } from '@angular/core';
import { BookService } from '../book-service';
import { Student } from '../show-student/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students:Student[]=[];
  service:BookService;
  column:string="id";
  order: boolean = true;
  constructor(service:BookService) {
    this.service=service;
  }

  ngOnInit(): void {
    this.service.fetchStudents();
    this.students=this.service.getStudents();
  }
  sort(column: string) {
  if (this.column == column) { // if same column clicked again
    this.order = !this.order;   // flip asc/desc
  } else {
    this.order = true;
    this.column = column; // store new column clicked
  }
  }

}
