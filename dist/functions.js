// Functions
function user(name, age, gender) { }
// Function Types
function fxnWCallBack(name, callback) {
    callback("Hello");
}
fxnWCallBack("karan", (arg) => {
    console.log(arg);
});
// Optional & Default Parameters
// Optional Params
function userDets(name, age, gender) { }
// Default Params
function defaultParams(name, age, gender = "Not Disclosed") { }
// Rest/ Spread Parameters & Overload
function printNumbers(...args) {
    console.log(args);
}
printNumbers(12, 22, 46, 43, 23, 4, 54, 454);
const names = ["Karan", "Jay", "Elon"];
const newNames = [...names];
console.log(newNames);
function abc(a, b) {
    if (typeof a === "string" && b === undefined) {
        console.log("Hey this is first fxn");
    }
    else if (typeof a === "string" && typeof b === "number") {
        return 123454;
    }
    else
        throw new Error("Something is wrong!");
}
abc("Hey");
const res = abc("Karan", 22);
console.log(res);
export {};
//# sourceMappingURL=functions.js.map