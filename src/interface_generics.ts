interface Chai{
    name:string,
    price:number,
    category:string
}

function printChai(chai:Chai){
    console.log(chai.name,chai.price,chai.category);
}

interface CoffeeMachine{
    start(): void,
    stop():void,
    brand: string,
    automatic?: boolean
}

function printCoffeeMachine(machine: CoffeeMachine){
    console.log(machine.brand, machine.automatic);
}

const machine1: CoffeeMachine = {
    brand: "Breville",
    automatic: true,
    start: () => console.log("Machine started"),
    stop: () => console.log("Machine stopped")
}

printCoffeeMachine(machine1);

interface GiveDiscount{
    (price: number): number
}

const applyDiscount:GiveDiscount = (p) => {
    return p - (p * 0.1);
}