import { Component, OnInit } from '@angular/core';
import { BookService } from '../book-service';
import { Student } from '../show-student/student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student:Student=new Student(0,'','',0,[]);
  createdFlag:boolean=false;
  service:BookService
  constructor(service:BookService) {
    this.service = service;
   }

  ngOnInit(): void {
  }
  add(data:any){
    this.student=new Student(data.id,data.firstName,data.lastName,data.age,[]);
    console.log('adding: '+this.student);
    //let co:Course = new Course(0,'Java',400); 
    //this.createdStudent.courses.push(co); // include after UI is created
    this.service.addStudent(this.student);
    this.createdFlag=true;
  }

}
