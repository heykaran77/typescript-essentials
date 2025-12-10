"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeCoffee(order) {
    console.log(`Making ${order.strong ? "strong" : ""} ${order.type} coffee`);
}
makeCoffee({ type: "espresso", strong: false });
class MakeChai {
    water = 100;
    milk = 50;
}
class Chai {
    size = "large";
}
class MyRes {
    status = { ok: true };
}
//# sourceMappingURL=typeAliases_Interfaces.js.map