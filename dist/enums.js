"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Coffee;
(function (Coffee) {
    Coffee["Latte"] = "latte";
    Coffee["Espresso"] = "espresso";
})(Coffee || (Coffee = {}));
function serveCoffee(c) {
    return `serving ${c}`;
}
console.log(serveCoffee(Coffee.Espresso));
//# sourceMappingURL=enums.js.map