// If Statment 

// 1
let age = 27
if (age > 18) {
    console.log("Your Are Adult");
}

//2

let score = 45;
if (score <= 50) {
    console.log("You failed the test");
}

//3

let name = "John";
if (name == "John") {
    console.log("Hello, John");
}

// 4 
let day = "Monday"
if (day != "Saturday" || day != "Sunday") {
    console.log("It's a weekday");
}

//5
let num = 4;
if (num % 2 == 0) {
    console.log("The number is even");
}

//6
let char = "a";
if ((/[a-zA-Z]/).test(char) && char.length === 1) {
    console.log("It's a letter");
}
else {
    console.log("It's not a letter");
}

//7 
let list = [1,2,3]
if (Array.isArray(list)) {
    console.log("It's an array");
}
else {
    console.log("It's not an array");
}

//8 && 9
let x = 5;
if (x >= 0 ) {
    console.log("x is a positive number");
}
else {
    console.log("x is a negative number");
}

//10
let z = 9
if (z % 3 == 0) {
    console.log("z is a multiple of 3");
}
else {
    console.log("z is not a multiple of 3");
}

//11
let gpa = 3.5;
if (gpa >= 3.0) {
    console.log("Congratulations, you have a good GPA!");
}
else {
    console.log("Sorry, you have a Bad GPA!");
}

//12 
let password = "mypassword123";
if (password.length >=8) {
    console.log("Your password is Strong");
}
else {
    console.log("Your password is Weak");
}

//13
age = 30;
if (age >= 18 && age <= 65) {
    console.log("You are of working age");
}

//14
let color = "Red";
if (color == "Red" || color == "Green" || color == "Blue") {
    console.log("color is a primary color");
}

//15s
function isValidNumber(Number){
    if (isNaN(Number)) {
        return `${Number} is not a number`;
    }
    return `${Number} is a valid number`;
}

console.log(isValidNumber("4x"));