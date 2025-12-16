function addToArray<T>(item: T): T[] {
    return [item];
}

addToArray("Hey")
addToArray(56)
addToArray({name:"Karan"})

interface Person<T>{
    gender: T
}

const p1: Person<string> = {gender: "Male"}
const p2: Person<number> = {gender: 1}

// Usecase in API Responses
interface APIPromise<T>{
status: number,
data: T,
error: string
}

interface User{
    name:string,
    age:number,
    gender: string
}

const response: APIPromise<User> = {
    status: 200,
    error: "Noo error",
    data: {
        name: "Karan",
        age: 21,
        gender: "male"
    }
}