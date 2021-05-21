import { ServiceRequest } from "./serviceRequest";
import { Pack } from "./pack";
import { Recharge } from "./recharge";

import { User } from "./user";

export class Account{
    accountId:number=0;
    userTo: User= new User(0,'','','','','');
    recharges:Recharge[]=[];
    registeredDate:string = '';
    requests:ServiceRequest[]=[];
    currentPack: Pack = new Pack(0,0,0,'','',[]);
    constructor(accountId: number, userTo: User, recharges: Recharge[], registeredDate: string, requests: ServiceRequest[], currentPack: Pack) {
        this.accountId = accountId;
        this.userTo = userTo;
        this.recharges = recharges;
        this.registeredDate = registeredDate;
        this.requests = requests;
        this.currentPack = currentPack;
    };
}