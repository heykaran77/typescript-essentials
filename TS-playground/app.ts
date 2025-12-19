// function getTotal(numbers: number[]) {
// or
function getTotal(numbers: Array<number>) {
  return numbers.reduce((acc, item) => {
    return acc + item;
  }, 0);
}

console.log(getTotal([4, 2, 6]));

// Type Aliases
type User = {
  name: string;
  age: number;
  role: string;
};

function getUserDetails(user: User): string {
  return `Name: ${user.name}, Age: ${user.age}, Role: ${user.role}`;
}

// Interfaces
interface Transaction {
  payerAccountNumber: number;
  payeeAccountNumber: number;
}

interface bankAccount {
  accNumber: number;
  accHolder: string;
  balance: number;
  isActive: boolean;
  transactions: Transaction[];
}

const personalAccount: bankAccount = {
  accHolder: "Karan Singh V",
  accNumber: 770,
  balance: 5000,
  isActive: true,
  transactions: [
    {
      payeeAccountNumber: 467,
      payerAccountNumber: 770,
    },
    {
      payeeAccountNumber: 678,
      payerAccountNumber: 770,
    },
  ],
};

// Ex: 02
interface Book {
  name: string;
  price: number;
}

interface Ebook extends Book {
  format: string;
  fileSize: number;
}

interface Audiobook extends Ebook {
  duration: number;
}

const book: Audiobook = {
  name: "Atomic Habits",
  price: 30,
  duration: 3,
  fileSize: 100,
  format: "mp3",
};
