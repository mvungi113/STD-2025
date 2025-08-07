// let accessAllowed;


// let age=prompt("Your age is: "); // Prompt box

// if(age >= 18){
//     accessAllowed = true; // If age is 18 or more, access is allowed
// } else {
//     accessAllowed = false; // If age is less than 18, access is denied
// }
// alert("Access allowed: " + accessAllowed); // Output the access status    





// // isLogin is a boolean variable that indicates whether the user is logged in or not

// let isLogin= false;

// if(isLogin == true){
//     alert("Welcome to the site!"); // If user is logged in, show welcome message
// }else{
//     alert("Please log in to continue!"); // If user is not logged in, prompt to log in
// }

// let num;
// num = prompt("Enter a number: "); // Prompt box to enter a number
// if(num > 0){
//     alert("The number is positive!"); // If number is greater than 0, it's positive
// }else if(num < 0){
//     alert("The number is negative!"); // If number is less than 0, it's negative
// }else if(num == 0){
//     alert("The number is zero!"); // If number is 0, it's zero
// }else{
//     alert("Invalid input! Please enter a valid number."); // If input is not a number, show error
// }

company = prompt("Enter your company name: "); // Prompt box to enter company name

 (company.toLowerCase() == "google") ? alert("Welcome to Google!") : alert("Sorry, we only accept Google employees."); // Ternary operator for company name


if(company.toLowerCase() == "google"){
    alert("Welcome to Google!");
}else{
    alert("Sorry, we only accept Google employees.");
}