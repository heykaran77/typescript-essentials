type CoffeeOrder = {
  type: string;
  strong: boolean;
};

function makeCoffee(order: CoffeeOrder) {
  console.log(`Making ${order.strong ? "strong" : ""} ${order.type} coffee`);
}

makeCoffee({ type: "espresso", strong: false });

type teaRecipe = {
  water: number;
  milk: number;
};

class MakeChai implements teaRecipe {
  water = 100;
  milk = 50;
}

// type CupSize = "small" | "large"; Doesnt work
// Make it interface
interface CupSize {
  size: "small" | "large";
}

class Chai implements CupSize {
  size: "small" | "large" = "large";
}

// Another ex
// Gives Error: A class can only implement an object type or intersection of object types with statically known members.
// type Response = { ok: true } | { ok: false };

interface Response {
  status: { ok: true } | { ok: false };
}

class MyRes implements Response {
  status: { ok: true } | { ok: false } = { ok: true };
}
