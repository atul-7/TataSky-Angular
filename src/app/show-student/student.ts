import { Course } from "./course";

export class Student {
    id:number= 0;
    firstName:string='';
    lastName:string='';
    age:number=0;
    courseList:string[]=[];
    courses:Course[]=[];
    constructor(id:number,firstName:string,lastName:string,age:number,courses:Course[]){
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.courses=courses;
    }

}