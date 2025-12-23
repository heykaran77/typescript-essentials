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

// Unions, Type Narrowing & Type Guards
// Union Operator
type ID = string | number;

function printID(id: ID) {
  // Type Narrowing
  if (typeof id === "string")
    console.log(id.toUpperCase().slice(5, 10).padStart(5, "#"));
  else console.log(id.toFixed(2));
}

printID("Order1008");

// Generics
// Instead of doing this for a function that does the same job, this voilates the Principal DRY [Do not Repeat Yourself]
function logString(args: string): string {
  console.log(args);
  return args;
}

function logNumber(args: number): number {
  console.log(args);
  return args;
}

logString("Hi I am logged!");
logNumber(22);

// Actual What you can Do
function loggerAnything<T>(args: T): T {
  if (typeof args === "string") console.log(args.toUpperCase());
  else if (typeof args === "number") console.log(args.toFixed(2));
  return args;
}

loggerAnything<string>("hello");

// Ex 02 Generics
interface HasAge {
  age: number;
}

function getOldest<T extends HasAge>(people: T[]): T | undefined {
  return people.sort((a, b) => b.age - a.age)[0];
}
const people: HasAge[] = [
  { age: 20 },
  {
    age: 30,
  },
  { age: 69 },
  {
    age: 23,
  },
];

interface Players {
  name: string;
  age: number;
}

const players: Players[] = [
  {
    name: "Karan",
    age: 21,
  },
  {
    name: "Ajay",
    age: 32,
  },
  {
    name: "Harsh",
    age: 57,
  },
  {
    name: "Akshat",
    age: 27,
  },
];

// const person: Players = getOldest(players) as Players;

// Using Generics
const person = getOldest(people);

// Ex 03
interface IPost {
  id: string;
  caption: string;
  date: Date;
}

interface IUser {
  name: string;
  id: string;
  age: number;
  posts: IPost[];
}

// const fetchPostData = async (path: string): Promise<IPost[]> => {
//   const response = await fetch(`https://example.com${path}`);
//   return response.json();
// };
const fetchData = async <T>(path: string): Promise<T> => {
  const response = await fetch(`https://example.com${path}`);
  return response.json();
};

(async () => {
  const posts = await fetchData<IPost[]>("/posts");
  posts[0]?.date;
})();

// const fetchUserData = async (path: string): Promise<IUser[]> => {
//   const response = await fetch(`https://example.com${path}`);
//   return response.json();
// };

(async () => {
  const users = await fetchData<IUser[]>("/users");
  users[0]?.name;
})();
