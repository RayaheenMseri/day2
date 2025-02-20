function greet(name: string):
    string {
    return `hello , ${name}!`;
}

console.log(greet('Rayaheen'))

let message: string = 'Hello, TypeScript!';
let age: number = 25
let isActive: boolean = true


let data: any = 24;
let input: unknown
let user = 'John' //inferredbas string

function add(a: number, b: number): number {
    return a + b;
}

const multiply = (x: number, y: number): number => x * y;

interface Car {
    brand: string;
    model: string;
    year: number;
}

const MyCar: Car = {
    brand: 'KIA',
    model: "pegas",
    year: 2021,
}

console.log(`${MyCar.brand} was made in ${MyCar.year}`)

//Defining an Interface
interface User {
    name: string;
    age: number;
    isAdmin?: boolean; // Optional property
}

const username: User = { name: "Fatima", age: 30 };


//Using Interfaces in Functions

function printUser(username: User) {
    console.log(`${username.name} is ${username.age} years old`);
}
// ✅ Call the function to display output
printUser(username);

//arrays
let number: number[] = [1, 2, 3, 4];
//tupples -- fixed lenght arrays
let person: [string, number] = ['rayaheen', 25];
//enums
enum Role { admin, user, guest };
let myRole: Role = Role.admin;

class myCar {
    brand: string;
    constructor(brand: string) {
        this.brand = brand;
    }


    drive() {
        console.log(`My car brand is ${this.brand}`)
    }
}


// generic 
function identity<T>(value: T): T {
    return value;
  }
  
  console.log(identity<string>("Hello")); // Output: "Hello"
  console.log(identity<number>(123)); // Output: 123