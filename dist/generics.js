"use strict";
// generics
// generic functions
// generic interfaces
// generic classess
Object.defineProperty(exports, "__esModule", { value: true });
// Generic functions
function log(item) {
    console.log(item);
}
log("Hello world!");
function CarDets(obj) {
    log(JSON.stringify(obj));
}
CarDets({ name: "Rubicon", model: "Jeep", key: "abce" });
//# sourceMappingURL=generics.js.map