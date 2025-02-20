function capitalizeWords(text: string):
    string {
    if (text == '') {
        return `you enterd an empty strings.`
    }
    return text.toUpperCase();
}

console.log(capitalizeWords("rayaheen"))
console.log(capitalizeWords(""))


function isValidNumber(num: unknown):
    boolean {
    if (typeof (num) == `number`) {
        return true
    } else {
        return false
    }

}

console.log(isValidNumber(3))
console.log(isValidNumber(""))


interface MyUser {
    id: number;
    name: string;
    email: string;
    idAdmin: boolean
}

const usere: MyUser = {
    name: "",
    id: 0,
    email: "",
    idAdmin: false,

}

function createUser(user: MyUser): string {
    return `User ${user.name} created successfully`;
}

console.log(createUser({ name: "Rayaheen", id: 1, email: "rayaheen@gmail.com", idAdmin: true, }))

class Product {
    name: string;
    price: number;
    private category: string;

    constructor(name: string, price: number, category: string) {
        this.name = name;
        this.price = price;
        this.category = category;
    }


    public getDiscountedPrice(discount: number) {
        return this.price - discount;
    }
}

const prod: Product = new Product('Lipstick', 500, 'Beaty');
console.log(`the original price is : ${prod.price} , the price after discount is : ${prod.getDiscountedPrice(150)}`)

function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] {
    const result: T[] = [];
    for (const item of arr) {
        if (predicate(item)) {
            result.push(item);
        }
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);
console.log(`Even numbers is : ${evenNumbers}`);

async function getUsers(): Promise<{ id: number; name: string; email: string }[]> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const users = await response.json();
        
        return users.map((user: any) => ({
            id: user.id,
            name: user.name,
            email: user.email
        }));
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
}

getUsers().then(users => console.log(users));
