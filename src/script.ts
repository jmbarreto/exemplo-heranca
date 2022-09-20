import { Animal } from ".\/Animal";
import { Bird } from "./Bird";
import { Duck } from "./Duck";
import { ICanFly } from "./iCanFly";
import { IcanSwin } from "./IcanSwin";
import { ICanWalk } from "./ICanWalk";

const duck = new Duck ('Patolino' , 3 ,50, 2 , true, 'preto')

function takeoff(Animal: ICanFly){
    Animal.fly();
}

takeoff(duck);

function fastRun (Animal : ICanWalk){
    Animal.walk()
}
fastRun (duck)

function fastSwin (Animal : IcanSwin){
    Animal.swin()
}
fastSwin (duck)