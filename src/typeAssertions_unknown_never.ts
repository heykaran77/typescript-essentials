let response: any = "42";
let numericLength: number = (response as string).length; // Forcefull assertion

type book = {
  name: string;
};

let bookString = '{"name": "Who was sudeep?"}';
let bookObj = JSON.parse(bookString) as book;
console.log(bookObj.name);

// const inputElement = document.getElementById("username") as HTMLInputElement;

// Any & Unknown
let value: any;
value = "Karan";
value = 45;
value = [1, 2, 3];
// value.toUpperCase();

let newValue: unknown;
newValue = "Karan";
newValue = 45;
newValue = [1, 2, 3];
newValue = "Prajwals";

if (typeof newValue === "string") {
  console.log(newValue.toUpperCase());
}

// Try-Catch Senario
try {
} catch (error) {
  if (error instanceof Error) console.log(error.message);
  console.log("Error ", error);
}

// Never : A function that never returns or a variable that cannot have a value
// let a: never = 12;

function neverReturns(): never {
  while (true) {} // Infinite loop
}
