import { Bird } from "./Bird";
import { ICanFly } from "./iCanFly";
import { IcanSwin } from "./IcanSwin";
import { ICanWalk } from "./ICanWalk";

class Duck extends Bird implements ICanWalk, ICanFly, IcanSwin{
    public color : string
    
    constructor (name : string , lifeTime : number , size : number , weight : number, canFly : boolean,color : string ){
    super (name , lifeTime , size , weight , canFly)
    this.color = color;
    }
public fly(): void {
    console.log(`${this.name} starts to fly! `)
}

public swin(): void {
    console.log(`${this.name} starts to swin`)
}
public walk(): void {
    console.log(`${this.name} starts to walk`)
}
    
}


export {Duck}