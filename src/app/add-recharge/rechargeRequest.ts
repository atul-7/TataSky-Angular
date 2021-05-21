import { Account } from "../account";
import { Pack } from "../pack";
import { ServiceRequest } from "../serviceRequest";
import { User } from "../user";

export class RechargeRequest{
    accountId:number=0;
    user:User = new User(0,'','','','','');
    packId:number=0;
    cost:number=0;
    daysValidity:number=0;
    description:string='';
    planName:string='';
    channels:string[]=[];
    registeredDate:string='';
    currentPack:Pack= new Pack(0,0,0,'','',[]);
    requests:ServiceRequest[]=[];

    constructor(acc:Account, pack:Pack){
        this.accountId = acc.accountId;
        this.user = acc.userTo;
        this.packId = pack.id;
        this.cost = pack.cost;
        this.daysValidity = pack.daysValidity;
        this.description = pack.description;
        this.planName = pack.planName;
        this.channels = pack.channels;
        this.currentPack = pack;
        this.registeredDate = acc.registeredDate;
        this.requests = acc.requests;
    }; 
    
}