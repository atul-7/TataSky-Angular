import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent implements OnInit {

  student:Student=new Student(0,'','',0,[]);
  constructor(private covidClient:HttpClient) { }

  ngOnInit(): void {
  }
  public studentInfo(studentid:string) {
    this.student=new Student(0,'','',0,[]);
    this.covidClient.get<Student>("http://localhost:8086/students/by/id/" + studentid).subscribe(
      (response)=>{this.student=response}
    );
  }

}
