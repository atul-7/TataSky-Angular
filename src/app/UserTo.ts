import { AccountTo } from "./accountTo";
import { Pack } from "./pack";

export class UserTo{
    id:number=0;
    username:string='';
    firstName:string='';
    lastName:string='';
    password:string='';
    role:string='';
    account:AccountTo = new AccountTo(0);
    constructor(id:number,username:string,firstName:string,lastName:string,password:string,role:string,account:AccountTo){
        this.id=id;
        this.username=username;
        this.firstName=firstName;
        this.lastName=lastName;
        this.password=password;
        this.role=role;
        this.account=account;
        
    };
    
}