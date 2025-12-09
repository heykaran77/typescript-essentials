"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showUser(obj) {
    if (obj.age) {
        return console.log(`Hi, ${obj.name}! you're ${obj.age} years old.`);
    }
    return console.log(`Hi, ${obj.name}!`);
}
showUser({ name: "Karan", age: 21 });
function isAdmin(obj) {
    if (obj.admin)
        return console.log(`${obj.name} is an Admin.`);
    return console.log(`${obj.name} is not admin.`);
}
isAdmin({ name: "Karan", admin: true });
isAdmin({ name: "Kushal", admin: false });
//# sourceMappingURL=interfaces.js.map