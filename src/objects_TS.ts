type coffeeOrder = {
  name: string;
  price: number;
  type: string;
};

// Partial
const updateCoffee = (updates: Partial<coffeeOrder>) => {
  console.log("Updating coffee: ", updates);
};

// Not needed to pass all the properties
updateCoffee({ name: "Espresso" });

type chaiOrder = {
  name?: string;
  price?: number;
  type?: string;
};

const makeChaiOrder = (order: Required<chaiOrder>) => {
  console.log("making chai: ", order);
};

// Make all properties in the type: chaiOrder required, even though they are optional
makeChaiOrder({ price: 25, name: "Ginger", type: "Butter" });

// Pick
type Car = {
  name: string;
  make: string;
  number: number;
  secretID: string;
};

const CarSpec = (specs: Pick<Car, "name" | "number">) => {
  console.log(`Name: ${specs.name} & Number: ${specs.number}`);
};

CarSpec({ name: "Supra", number: 8055 });

// Omit
const publicCar = (specs: Omit<Car, "secretID">) => {
  console.log(
    `Name: ${specs.name} & Number: ${specs.number} Make: ${specs.make}`
  );
};

publicCar({
  name: "Toyota",
  make: "India",
  number: 7700,
  //   secretID: "dnsjniefb9dbcdv", Cannot give
});
