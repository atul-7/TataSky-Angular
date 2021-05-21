import { Account } from "./account";
import { Pack } from "./pack";
import { User } from "./user";

export class Recharge{
//     id:number=0;
//     account:Account = new Account(0,new User(0,'','','','',''),[],'',[],new Pack());
//     amount:number=0;
//     daysValidity:number=0;
//     planDescription:string='';
//     planName:string='';
//     purchasedDate:Date=new Date();
//     channels:string[]=[];
//     pack:Pack = new Pack();
//     active:boolean=false;
//     constructor(id:number,account:Account,amount:number,daysValidity:number,planDescription:string,planName:string,purchasedDate:Date,channels:string[],pack:Pack,active:boolean){
//     this.id = id;
//     this.account = account;
//     this.amount = amount;
//     this.daysValidity = daysValidity;
//     this.planDescription = planDescription;
//     this.planName = planName;
//     this.purchasedDate = purchasedDate;
//     this.channels = channels;
//     this.pack = pack;
//     this.active = active;
//     };
id:number=0;
account:Account = new Account(0,new User(0,'','','','',''),[],'',[],new Pack(0,0,0,'','',[]));
amount:number=0;
daysValidity:number=0;
planDescription:string='';
planName:string='';
purchasedDate:string='';
channels:string[]=[];
pack:Pack = new Pack(0,0,0,'','',[]);
active:boolean=false;
constructor(id:number,account:Account,amount:number,daysValidity:number,planDescription:string,planName:string,purchasedDate:string,channels:string[],pack:Pack,active:boolean){
this.id = id;
this.account = account;
this.amount = amount;
this.daysValidity = daysValidity;
this.planDescription = planDescription;
this.planName = planName;
this.purchasedDate = purchasedDate;
this.channels = channels;
this.pack = pack;
this.active = active;
};
}
 