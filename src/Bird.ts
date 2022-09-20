import { Animal } from "./Animal";

abstract class Bird extends Animal {
    public canFly : boolean;
    
    constructor( name : string , lifeTime : number , size : number , weight : number, numbercanFly : boolean){
        super(name,lifeTime,size,weight)
        this.canFly = this.canFly
    }
}

export { Bird };