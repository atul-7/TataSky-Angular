import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Book } from "./book";
import { Student } from "./show-student/student";


@Injectable ({
    providedIn:'root'
})
export class BookService{
    http:HttpClient;
    constructor(http:HttpClient){this.http=http;}
    students:Student[]=[];
    books:Array<Book>=[];
    idExists(id: any):boolean {
        if(this.books.find(b=>b.id==id)){
            return true;
        }
        return false;
    }
    updatedBook(book: Book):boolean {
      let bookToUpdate = this.books.find(b=>b.id==book.id);
      if(bookToUpdate){
        bookToUpdate.title=book.title;
        bookToUpdate.author=book.author;
        bookToUpdate.price=book.price;
        return true;
      }
      return false;
    }
    getBook(id: any):Book {
        let book:Book=new Book();
        //book=this.books.find(b=>b.id==id);
        for(let i=0;i<this.books.length;i++){
            let b=this.books[i];
            if(b.id==id){
                book=b;
                break;
            }
        }
        return book;
    }
    getStudents():Student[] {
        return this.students;
    }
      fetchStudents() {
        this.students=[];
        this.http.get<Student[]>("http://localhost:8086/students/").subscribe(
            data=>{this.convert(data);}
        );
      }
      convert(data:any){
        for(let s of data){
            let stud = new Student(s.id,s.firstName,s.lastName,s.age,s.courses);
            console.log('all----');
            if(s.courses.length>0){
               for(let cv of s.courses){
                console.log('~'+ cv.id);
                stud.courseList.push(cv.name);
               }
            }
            this.students.push(stud);
         }
       }
       addStudent(stud: Student) {
        this.students.push(stud); 
        this.sendPost(stud);
   
      }
    sendPost(stud: any) {
        const headers = { 'content-type': 'application/json'};
        //let co:Course = new Course(0,'Java',400);
        //stud.courses.push(co);
        const body=JSON.stringify(stud);  
        console.log('---------');
        console.log(body);
         this.http.post('http://localhost:8086/students/add',body,{'headers':headers}).subscribe(
           data=>{
             let dataVal = Object.values(data);
             stud.id=dataVal[0];
           }
         );
        }
     
  }