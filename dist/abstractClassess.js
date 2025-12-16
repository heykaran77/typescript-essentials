class Payment {
    amount;
    constructor(amount) {
        this.amount = amount;
    }
    // normal method (shared logic)
    printAmount() {
        console.log(`Amount: ₹${this.amount}`);
    }
}
class CreditCardPayment extends Payment {
    pay() {
        console.log("Paid using credit card");
    }
}
class UpiPayment extends Payment {
    pay() {
        console.log("Paid using UPI");
    }
}
const payment1 = new CreditCardPayment(500);
payment1.printAmount();
payment1.pay();
const payment2 = new UpiPayment(1200);
payment2.pay();
export {};
//# sourceMappingURL=abstractClassess.js.map