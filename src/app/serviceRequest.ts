import { Account } from "./account";
import { Pack } from "./pack";
import { User } from "./user";

export class ServiceRequest{
    id:number=0;
    account:Account = new Account(0,new User(0,'','','','',''),[],'',[],new Pack(0,0,0,'','',[]));
    requestedDate:string = '';
    statusOpened:boolean =false;
    constructor(id:number,account:Account, requestedDate:string,statusOpened:boolean){
        this.id = id;
        this.account = account;
        this.requestedDate= requestedDate;
        this.statusOpened= statusOpened;
    };

}