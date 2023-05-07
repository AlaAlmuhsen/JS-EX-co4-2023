console.log("********** 1 & 2  **********"); 
console.log("Using For Loob"); 

var outPut = "" ;
for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0)
    outPut += i + " ";
}
console.log(outPut);


console.log("Using While Loob"); 
outPut = "";
var counter = 1;
while (counter <= 50) {
    if (counter % 2 == 0 )
        outPut += counter + " ";
    counter++;
}
console.log(outPut);

console.log("********** 3 **********"); 
outPut = "";
var counter = 1;
while (counter <= 50) {
    if (counter % 2 != 0 )
    outPut += counter + " ";
    counter++;
}
console.log(outPut);

outPut = ""
console.log("********** 4 **********"); 
for (let i = 1; i < 100; i++) {
    if (i % 3 == 3 && i % 5 == 0) {
        outPut += "FizzBuzz" + " ";
    }
    else if (i % 3 == 0 ) {
        outPut += "Fizz" + " ";
    }
    else if (i % 5 == 0 ){
        outPut += "Buzz" + " ";
    }
    else { 
        outPut+= i + " ";
    }
}
console.log(outPut);


console.log("********** 5 **********"); 
function fizzBuzz (number) {
    if (number % 3 == 3 && number % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (number % 3 == 0 ) {
        console.log("Fizz");
    }
    else if (number % 5 == 0 ){
        console.log("Buzz");
    }
    else { 
        console.log(number);
    }
}
fizzBuzz (5);

console.log("********** 6 **********"); 

function recursiveFizzBuzz (start , number) {
    if (start > number)
    return; 
    if (start % 3 == 3 && start % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (start % 3 == 0 ) {
        console.log("Fizz");
    }
    else if (start % 5 == 0 ){
        console.log("Buzz");
    }
    else { 
        console.log(start);
    }
    recursiveFizzBuzz (start+1 , number );
}
recursiveFizzBuzz (1 , 5);


console.log("********** 7 **********");

let money = 57;
var array = [25 , 10 , 5 , 1];
var outPut = "";
for (let i = 0; i < array.length; i++) {
    while (money >= array[i]) {
        outPut+= array[i] + " ";
        money-=array[i];
    }
}
console.log(outPut);

console.log("********** 8 **********");

function charcounter (word , char) {
    counter = 0;
    word = word.toLowerCase();
    for (let i = 0; i < word.length; i++) {
        if (word[i] == char) {
            counter++;
        }
    }
    return counter;
}

console.log(charcounter ("Coding Academy By Orange" , "o"));

console.log("********** 9 **********");
console.log("********** a **********");
for (let i = 1; i <= 20; i++) {
    console.log(i);
}
console.log("********** b **********");
for (let i = 3; i <= 29; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}
console.log("********** c **********");
for (let i = 12; i >= -14; i--) {
    console.log(i);
}
console.log("********** d **********");
for (let i = 50; i >= 20; i--) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

console.log("********** 10 **********");
console.log("********** a **********");
var name = "CondingAcademy";
var array = [7 , 500 , 'KH404' , 'Black' , 36];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}


console.log("********** d **********");
for (let i = name.length-1; i >= 0 ; i--) {
    console.log(name[i]);
}


console.log("********** 11 **********");

var array = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
var oddArray = [] , evenArray = [];
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0 ) {
        evenArray.push(array[i]);
    }
    else {
        oddArray.push(array[i]);
    }
}
console.log(oddArray);
console.log(evenArray);


console.log("********** 12 **********");
let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grain = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetable = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverage = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let dessert = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

let number = Math.floor(1 + Math.random() * 5);
console.log(protein[number]);
number = Math.floor(1 + Math.random() * 5);
console.log(grain[number]);
number = Math.floor(1 + Math.random() * 5);
console.log(vegetable[number]);
number = Math.floor(1 + Math.random() * 5);
console.log(beverage[number]);
number = Math.floor(1 + Math.random() * 5);
console.log(dessert[number]);