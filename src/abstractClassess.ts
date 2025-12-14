abstract class Payment {
  constructor(public amount: number) {}

  // abstract method (must be implemented)
  abstract pay(): void;

  // normal method (shared logic)
  printAmount() {
    console.log(`Amount: ₹${this.amount}`);
  }
}

class CreditCardPayment extends Payment {
  pay(): void {
    console.log("Paid using credit card");
  }
}

class UpiPayment extends Payment {
  pay(): void {
    console.log("Paid using UPI");
  }
}

const payment1 = new CreditCardPayment(500);
payment1.printAmount();
payment1.pay();

const payment2 = new UpiPayment(1200);
payment2.pay();
