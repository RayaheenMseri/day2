function greet(name) {
    return "hello , ".concat(name, "!");
}
console.log(greet('Rayaheen'));
var message = 'Hello, TypeScript!';
var age = 25;
var isActive = true;
var data = 24;
var input;
var user = 'John'; //inferredbas string
function add(a, b) {
    return a + b;
}
var multiply = function (x, y) { return x * y; };
var MyCar = {
    brand: 'KIA',
    model: "pegas",
    year: 2021,
};
console.log("".concat(MyCar.brand, " was made in ").concat(MyCar.year));
var username = { name: "Fatima", age: 30 };
//Using Interfaces in Functions
function printUser(username) {
    console.log("".concat(username.name, " is ").concat(username.age, " years old"));
}
// ✅ Call the function to display output
printUser(username);
//arrays
var number = [1, 2, 3, 4];
//tupples -- fixed lenght arrays
var person = ['rayaheen', 25];
//enums
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["user"] = 1] = "user";
    Role[Role["guest"] = 2] = "guest";
})(Role || (Role = {}));
;
var myRole = Role.admin;
var myCar = /** @class */ (function () {
    function myCar(brand) {
        this.brand = brand;
    }
    myCar.prototype.drive = function () {
        console.log("My car brand is ".concat(this.brand));
    };
    return myCar;
}());
// generic 
function identity(value) {
    return value;
}
console.log(identity("Hello")); // Output: "Hello"
console.log(identity(123)); // Output: 123
