"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let users = 12; // it accepts both string & numbers
let food = "Veg";
// Throws error, cause food only has two options
// food = 'Banana'
let orders = ["1002", "1003", "1005", "1004"];
let currentOrder; // Variable is any, i.e can take any type of data
for (let order of orders) {
    if (order === "1003") {
        currentOrder = order;
        break;
    }
}
// if you annotate currentOrder: string, then it gives error cause before it was any & could accept ANY data type, even UNDEFINED.
console.log(currentOrder);
//# sourceMappingURL=unions&any.js.map