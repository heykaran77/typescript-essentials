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
