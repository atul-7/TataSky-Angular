import { Injectable } from "@angular/core";


import { HttpClient } from '@angular/common/http';
import { User } from "./user";
import { Account } from "./account";
import { Pack } from "./pack";
import { UserTo } from "./UserTo";
// import { Console } from "console";



@Injectable({
  providedIn: 'root'
})
export class UserService {
  http:HttpClient;
 users:User[]=[];
 account:Account=new Account(0,new User(0,'','','','',''),[],'',[],new Pack(0,0,0,'','',[]));
  user:User=new User(0,'','','','','');
  constructor(http:HttpClient) {
    this.http = http;
   }
//    getStudent(stud:Student, courses:Course[]){
//      console.log('id:' + stud.id);
//      this.http.get('http://localhost:8585/students/by/id/'+stud.id).subscribe(
//        data=>{
//          console.log(data);
//          let dataVal:any = Object.values(data);
//          stud.id=dataVal[0];
//          stud.firstName=dataVal[1];
//          stud.lastName=dataVal[2];
//          stud.age=dataVal[3];
//          let coursesFound:any = Object.values(dataVal[4]);
//          console.log('---array courses--')
//          for(let s of coursesFound){
//            console.log(s);
//            let course:Course = new Course(s.id, s.name,s.fee);
//            courses.push(course);
//          }
//          console.log('----** ' );
//          console.log(stud);
//        },
//        error=>{console.log('error'); stud.age=0;}
//      );
      
//    }
//    fetchStudents(){
//     this.students=[];
//      this.http.get('http://localhost:8585/students/').subscribe(
//        data=>{
//           //console.log('data: '+data);         
//            this.convert(data);         
//        }
//      );
//    }
   sendPost(usr:any){
    const headers = { 'content-type': 'application/json'};
    
    const body=JSON.stringify(usr);  
    console.log('---------');
    console.log(body);
     this.http.post('http://localhost:8089/user/add',body,{'headers':headers}).subscribe(
       data=>{
         let dataVal = Object.values(data);
        //  console.log(dataVal);
          usr.id=dataVal[0];
       }
     );
   }
//   getStudents():Student[]{
//       return this.students;
//    }
//    convert(data:any){
//     for(let s of data){
//         let stud = new Student(s.id,s.firstName,s.lastName,s.age);
//         //console.log('all----');
//         if(s.courses.length>0){
//            for(let cv of s.courses){
//             //console.log('~'+ cv.id);
//             stud.courseList.push(cv.name);
//            }
//         }
//         this.users.push(usr);
//      }
//    }
   registerUser(usr:User){
     this.users.push(usr); 
     this.sendPost(usr);
   }
   update(usr: UserTo) {
  
    this.users.push(usr);
    this.sendPut(usr);
  }
  sendPut(usr:any){
    const headers = { 'content-type': 'application/json'};
    
    const body=JSON.stringify(usr);  
    console.log('---------');
    console.log(body);
     this.http.put('http://localhost:8089/user/update',body,{'headers':headers}).subscribe(
       data=>{
         let dataVal = Object.values(data);
         console.log(dataVal);
          // usr.id=dataVal[0];
       }
     );
   }
}
