export class Pack{
    id:number=0;
    cost:number=0;
    daysValidity:number=0;
    description:string='';
    planName:string='';
    channels:string[]=[];


constructor(id:number,cost:number,daysValidity:number,description:string,planName:string,channels:string[]){
    this.id = id;
    this.cost = cost;
    this.daysValidity = daysValidity;
    this.description = description;
    this.planName = planName;
    this.channels = channels;
    };
}