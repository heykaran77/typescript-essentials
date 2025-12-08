// Type Narrowing

function getCoffee(kind: string | number) {
  if (typeof kind === "string") {
    // Can perform all operations on strings with confidence
    return `Making ${kind} coffee...`;
  }
  return `Coffee Order #${kind}.`;
}

function serveCoffee(name?: string) {
  if (name) {
    return `coffee for ${name}...`;
  }
  return `hello your coffee is ready!`;
}

function orderCoffee(size: "small" | "medium" | "large" | number) {
  if (size === "small") `small coffee...`;
  if (size === "medium" || size === "large") `extra coffee...`;
  return `chai order #${size}`;
}

// Type Guards

class starBucksCoffee {
  serve() {
    return `Serving expensive coffee`;
  }
}

class hunkleCoffee {
  serve() {
    return `serving hunkle coffee`;
  }
}

function serve(coffee: starBucksCoffee | hunkleCoffee) {
  if (coffee instanceof starBucksCoffee) {
    return coffee.serve();
  }
  return coffee.serve();
}

// Custom Types
type coffeeSpecs = {
  type: string;
  sugar: number;
};

// Any object going through this function & returned gives us confidence that we can use the dot notation
function isCoffeeOrder(obj: any): obj is coffeeSpecs {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveOrder(item: coffeeSpecs | string) {
  if (isCoffeeOrder(item)) {
    return `${item.type} coffee with ${item.sugar} for you!`;
  }
  return `Serving custom coffee: ${item}`;
}

console.log(serveOrder({ type: "Java Chip", sugar: 60 }));
console.log(serveOrder("Frappuchino"));

type filterCoffee = {
  type: "filter";
  caffeine: number;
};
type latte = {
  type: "latte";
  caffeine: number;
};
type capucchino = {
  type: "capucchino";
  caffeine: number;
};

type coffee = filterCoffee | latte | capucchino;
function makeCoffee(order: coffee) {
  switch (order.type) {
    case "filter":
      return `Filter Coffee`;
      break;
    case "capucchino":
      return `Capucchino`;
    case "latte":
      return `Latte`;
  }
}

// Unknown type
let data: unknown = "Karan";
// Cannot do this before validating
// console.log(data.toUpperCase());
if (typeof data === "string") {
  console.log(data.toLowerCase());
}
