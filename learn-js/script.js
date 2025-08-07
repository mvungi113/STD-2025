// console.log("Hello, World!");

// alert("Welcome to JavaScript Learning!");

// js comments
/* 
multiline comments
This is a multiline comment.
*/

//varable -- variables are used to store data/information


let message;

message = "Hello, JavaScript!";
console.log(message);

let firstname = "John",
    lastname= "Mbinda",
    age=5;
    console.log(typeof age)
console.log(firstname, lastname, age);

var city = "New York";
console.log(city);

let a ="hello Jumanji djhf ghhgs ";
let b = a;
console.log(b);

// let, var, const

const pi = 3.14;
console.log(pi);

//pi = 32;
console.log(pi); // This will throw an error because pi is a constant and cannot be reassigned


const BGCOLOR = "blue";
const TEXTCOLOR = "ffffff"


console.log(BGCOLOR, TEXTCOLOR);


// Data types in JavaScript

let number = 42; // Number
console.log(typeof number); // Output: number
number= "42"; // String
console.log(typeof number); // Output: string

console.log(1/0); // Output: Infinity
console.log(-1/0); // Output: -Infinity 
console.log(0/0); // Output: NaN (Not a Number)
console.log("4 / 2 = " + 4/2); // Output: 2

let st ="Hello, World!";
console.log(st); // Output: Hello, World!

let isNumber=  true; // Boolean
console.log(isNumber); // Output: true
let isLogin = false; // Boolean
console.log(isLogin); // Output: false

// alert("This is an alert message!"); // Alert box

//prompt

//promt user input
// let result = prompt("Enter your name: "); // Prompt box
// alert("Welcome, " + result + "!"); // Output the entered name


//confirm

// let isBoss = confirm("Are you the boss?"); // Confirmation box
// console.log(isBoss)


//  type conversion 
// let value = false;
// alert(typeof value); // Output: boolean

// // /string conversion
// value = String(value);
// alert(typeof value); // Output: string

// value = Number(value);
// alert(typeof value); // Output: number

// alert(Boolean(1))
// alert(Boolean("hello"))


let x, y,z;
x=100;
y=200;

///addition`````""

console.log(`Sum ${x} + ${y} = ${x + y}`); // Output: 300
console.log("Sum " + x + " + " + y + " = " + (x + y)); // Output: 300

sum = x + y;
console.log("Sum: = " + sum); // Output: Sum: 300
console.log(`Sum: = ${sum}`); // Output: Sum: 300

// Substraction
sub = y - x;
console.log("Substraction: = " + sub); // Output: Substraction: 100

// multiplication
mul = x * y;
console.log("Multiplication: = " + mul); // Output: Multiplication: 200

//division
div = y / x;    
console.log("Division: = " + div); // Output: Division: 2

// modulus
mod = y % x;            
console.log("Modulus: = " + mod); // Output: Modulus: 0

let ax,bx,cx;
ax = 10;
// ax = bx = cx = 10;
bx = cx = ax; // Assigning the value of ax to bx and cx

console.log("ax: " + ax); // Output: 10
console.log("bx: " + bx); // Output: 10     
console.log("cx: " + cx); // Output: 10


let n = 2;
n = n + 5;
n = n * 2;
console.log("n: " + n); // Output: 14


// comparison 

console.log('a' > 'b'); // Output: false
console.log('a' < 'b'); // Output: true
console.log('a' === 'b'); // Output: false
console.log('a' !== 'b'); // Output: true

console.log(1 > 2);
console.log(1 < 2);
console.log(1 == 2);
console.log(1 != 2);
console.log(1 >= 2);
console.log(1 <= 2);




console.log(" " == false)
