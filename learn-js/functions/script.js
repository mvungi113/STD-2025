//function declaration

function MyFunct(a , b, c){
    //function body
    // alert("Hello World");

    return a + b + c;

}

//function call
let callOne = MyFunct(5, 10, 15);
let callTwo = MyFunct(1, 4, 60);


console.log(callOne); // 30
console.log(callTwo); // 65

function mariAmu(){
    console.log("Hello Mari Amu");
}

//call Mari Amu
mariAmu();

function hellWorld(name){
    console.log("Hello " + name);
}

hellWorld("Alice")
hellWorld("Bob")
hellWorld("Charlie")
hellWorld("Dave")



/// local variable
function showMessage(){
    let message = "Hello World. This is a local variable.";
    console.log(message);
}

showMessage();

// console.log(message); // This will throw an error because message is not defined outside the function

// global variable
Deta
let userName = "Asha"

function showUserName(){
    userName = "Juma"

    let message = "Hello " + userName;
    console.log(message); //
}

console.log("My name is " + userName); // Output: Asha

showUserName();


//functions parameters

function showDetails(id = 0, details = "No details provided"){
    console.log(id + "  " + details)
}

showils(1);
showDetails(2, "This is the second detail");
showDetails(0,"This is the third detail");


