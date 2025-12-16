// Partial
const updateCoffee = (updates) => {
    console.log("Updating coffee: ", updates);
};
// Not needed to pass all the properties
updateCoffee({ name: "Espresso" });
const makeChaiOrder = (order) => {
    console.log("making chai: ", order);
};
// Make all properties in the type: chaiOrder required, even though they are optional
makeChaiOrder({ price: 25, name: "Ginger", type: "Butter" });
const CarSpec = (specs) => {
    console.log(`Name: ${specs.name} & Number: ${specs.number}`);
};
CarSpec({ name: "Supra", number: 8055 });
// Omit
const publicCar = (specs) => {
    console.log(`Name: ${specs.name} & Number: ${specs.number} Make: ${specs.make}`);
};
publicCar({
    name: "Toyota",
    make: "India",
    number: 7700,
    //   secretID: "dnsjniefb9dbcdv", Cannot give
});
export {};
//# sourceMappingURL=objects_TS.js.map