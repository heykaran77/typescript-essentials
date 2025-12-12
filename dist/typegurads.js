"use strict";
// type guards is basically type narrowing
Object.defineProperty(exports, "__esModule", { value: true });
function abc(a) {
    // using a. gives all methods common to string & number
    // but doing this
    if (typeof a === "string") {
        return a.toLowerCase();
    }
    else if (typeof a === "number") {
        return a.toFixed(2);
    }
    else {
        throw new Error("hey some error occured...");
    }
}
console.log(abc("hello booo"));
console.log(abc(7700));
// console.log(abc(true)); Error
// instanceOf
class TV {
    switchOffTV() {
        console.log("switching off TV");
    }
}
class Car {
    switchOffCar() {
        console.log("switching off car...");
    }
}
function switchOff(something) {
    if (something instanceof TV) {
        something.switchOffTV();
    }
    else if (something instanceof Car) {
        something.switchOffCar();
    }
}
const t1 = new TV();
const c1 = new Car();
switchOff(t1);
//# sourceMappingURL=typegurads.js.map