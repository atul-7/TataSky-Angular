import { Account } from "./account";

export class User{
    id:number=0;
    username:string='';
    firstName:string='';
    lastName:string='';
    password:string='';
    // account:Account = new Account();
    role:string='';
    constructor(id:number, username:string,firstName:string, lastName:string, password:string, role:string){
        this.id=id;
        this.username=username;
        this.firstName=firstName;
        this.lastName=lastName;
        this.password=password;
        // this.account=account;
        this.role= role;
    };
} 