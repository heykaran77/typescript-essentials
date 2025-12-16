function printChai(chai) {
    console.log(chai.name, chai.price, chai.category);
}
function printCoffeeMachine(machine) {
    console.log(machine.brand, machine.automatic);
}
const machine1 = {
    brand: "Breville",
    automatic: true,
    start: () => console.log("Machine started"),
    stop: () => console.log("Machine stopped")
};
printCoffeeMachine(machine1);
const applyDiscount = (p) => {
    return p - (p * 0.1);
};
export {};
//# sourceMappingURL=interface_generics.js.map