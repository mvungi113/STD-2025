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