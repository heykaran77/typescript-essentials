// Interface used to define the shape of the user object
interface User {
  name: string;
  age?: number; // Optional property age
}

function showUser(obj: User) {
  if (obj.age) {
    return console.log(`Hi, ${obj.name}! you're ${obj.age} years old.`);
  }
  return console.log(`Hi, ${obj.name}!`);
}

showUser({ name: "Karan", age: 21 });
// Extending interfaces
interface Admin extends User {
  admin: boolean;
}

function isAdmin(obj: Admin) {
  if (obj.admin) return console.log(`${obj.name} is an Admin.`);
  return console.log(`${obj.name} is not admin.`);
}

isAdmin({ name: "Karan", admin: true });
isAdmin({ name: "Kushal", admin: false });
