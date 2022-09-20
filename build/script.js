"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Duck_1 = require("./Duck");
var duck = new Duck_1.Duck('Patolino', 3, 50, 2, true, 'preto');
function takeoff(Animal) {
    Animal.fly();
}
takeoff(duck);
function fastRun(Animal) {
    Animal.walk();
}
fastRun(duck);
function fastSwin(Animal) {
    Animal.swin();
}
fastSwin(duck);
