// Functions
function user(name: string, age: number, gender: string) {}

// Function Types
function fxnWCallBack(name: string, callback: (value: string) => void) {
  callback("Hello");
}

fxnWCallBack("karan", (arg: string) => {
  console.log(arg);
});

// Optional & Default Parameters
// Optional Params
function userDets(name: string, age: number, gender?: string) {}

// Default Params
function defaultParams(
  name: string,
  age: number,
  gender: string = "Not Disclosed"
) {}

// Rest/ Spread Parameters & Overload
function printNumbers(...args: number[]) {
  console.log(args);
}

printNumbers(12, 22, 46, 43, 23, 4, 54, 454);
const names = ["Karan", "Jay", "Elon"];
const newNames = [...names];
console.log(newNames);

function abc(a: string): void;
function abc(a: string, b: number): number;

function abc(a: string, b?: number) {
  if (typeof a === "string" && b === undefined) {
    console.log("Hey this is first fxn");
  } else if (typeof a === "string" && typeof b === "number") {
    return 123454;
  } else throw new Error("Something is wrong!");
}

abc("Hey");
const res = abc("Karan", 22);
console.log(res);
