let users: string | number = 12; // it accepts both string & numbers
let food: "Veg" | "Non-veg" = "Veg";

// Throws error, cause food only has two options
// food = 'Banana'

let orders: string[] = ["1002", "1003", "1005", "1004"];
let currentOrder: string | undefined; // Variable is any, i.e can take any type of data

for (let order of orders) {
  if (order === "1003") {
    currentOrder = order;
    break;
  }
}

// if you annotate currentOrder: string, then it gives error cause before it was any & could accept ANY data type, even UNDEFINED.
console.log(currentOrder);
