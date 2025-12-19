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
export {};
//# sourceMappingURL=app.js.map