// generics
// generic functions
// generic interfaces
// generic classess

// Generic functions
function log<T>(item: T) {
  console.log(item);
}

log<string>("Hello world!");

// Generic interface
interface Car<T> {
  name: string;
  model: string;
  key: T;
}

function CarDets(obj: Car<string>) {
  //   log(JSON.stringify(obj));
  log(obj);
}

CarDets({ name: "Rubicon", model: "Jeep", key: "abce" });

// Generic Classess
class Coffee<T> {
  constructor(public name: T) {}
}

const c1 = new Coffee<string>("espresso");
const c2 = new Coffee<number>(32);
console.log(c1.name, c2.name);

function abcd<T>(a: T, b: T): T {
  return a; // No issues
  // Error cause TS treats "Directly written string" as Literals NOT strings
  //   return "hey";
  // Can do the same by type assertion, no errors
  //   return "hey" as T;
  // or  return <T>"hey";
}
abcd<string>("hello", "world");
