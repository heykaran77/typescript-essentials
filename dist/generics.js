// generics
// generic functions
// generic interfaces
// generic classess
// Generic functions
function log(item) {
    console.log(item);
}
log("Hello world!");
function CarDets(obj) {
    //   log(JSON.stringify(obj));
    log(obj);
}
CarDets({ name: "Rubicon", model: "Jeep", key: "abce" });
// Generic Classess
class Coffee {
    name;
    constructor(name) {
        this.name = name;
    }
}
const c1 = new Coffee("espresso");
const c2 = new Coffee(32);
console.log(c1.name, c2.name);
function abcd(a, b) {
    return a; // No issues
    // Error cause TS treats "Directly written string" as Literals NOT strings
    //   return "hey";
    // Can do the same by type assertion, no errors
    //   return "hey" as T;
    // or  return <T>"hey";
}
abcd("hello", "world");
export {};
//# sourceMappingURL=generics.js.map