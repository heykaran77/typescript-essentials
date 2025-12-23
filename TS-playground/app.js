// function getTotal(numbers: number[]) {
// or
function getTotal(numbers) {
    return numbers.reduce((acc, item) => {
        return acc + item;
    }, 0);
}
console.log(getTotal([4, 2, 6]));
function getUserDetails(user) {
    return `Name: ${user.name}, Age: ${user.age}, Role: ${user.role}`;
}
const personalAccount = {
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
const book = {
    name: "Atomic Habits",
    price: 30,
    duration: 3,
    fileSize: 100,
    format: "mp3",
};
function printID(id) {
    // Type Narrowing
    if (typeof id === "string")
        console.log(id.toUpperCase().slice(5, 10).padStart(5, "#"));
    else
        console.log(id.toFixed(2));
}
printID("Order1008");
// Generics
// Instead of doing this for a function that does the same job, this voilates the Principal DRY [Do not Repeat Yourself]
function logString(args) {
    console.log(args);
    return args;
}
function logNumber(args) {
    console.log(args);
    return args;
}
logString("Hi I am logged!");
logNumber(22);
// Actual What you can Do
function loggerAnything(args) {
    if (typeof args === "string")
        console.log(args.toUpperCase());
    else if (typeof args === "number")
        console.log(args.toFixed(2));
    return args;
}
loggerAnything("hello");
function getOldest(people) {
    return people.sort((a, b) => b.age - a.age)[0];
}
const people = [
    { age: 20 },
    {
        age: 30,
    },
    { age: 69 },
    {
        age: 23,
    },
];
const players = [
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
// const fetchPostData = async (path: string): Promise<IPost[]> => {
//   const response = await fetch(`https://example.com${path}`);
//   return response.json();
// };
const fetchData = async (path) => {
    const response = await fetch(`https://example.com${path}`);
    return response.json();
};
(async () => {
    const posts = await fetchData("/posts");
    posts[0]?.date;
})();
// const fetchUserData = async (path: string): Promise<IUser[]> => {
//   const response = await fetch(`https://example.com${path}`);
//   return response.json();
// };
(async () => {
    const users = await fetchData("/users");
    users[0]?.name;
})();
export {};
//# sourceMappingURL=app.js.map