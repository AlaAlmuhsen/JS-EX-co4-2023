// data types and operators

// Cash Flow ratio
let cash = 1000 , liabilities = 500;
console.log(cash / liabilities);


// net income
let revenues = 1000 , expenses = 500;
console.log(revenues - expenses);

// total assets 
liabilities = 1000; 
let equity = 500 ;
console.log(liabilities + equity);

// Net Income 
let profit = 1000 , sales = 500 ;
console.log(profit * sales);

// average 
let n1 = 7 , n2 = 9 , n3 = 2 ;
console.log( (n1 + n2 + n3) / 3 );

// Discount 
let price = 150 , discount = 0.3;
console.log(price - (price * discount));

// Age Limit 
let age = 20;
if (age >= 18 && age<=30) {
    console.log(true);
}
else {
    console.log(false);
}

//Exponential
let number_1 = 2 , number_2 = 3;
console.log(number_1 ** number_2);

//Remainder
number_1 = 10 , number_2 = 4;
console.log(number_1 % number_2);

// Question 2 

console.log(typeof(100));       //number
console.log(typeof(73.9));      //number 
console.log(typeof(NaN));       //number
console.log(typeof("Water"));   //String
console.log(typeof(false));     //Boolean
console.log(typeof(9 != 11));   //Boolean
console.log("Orang" + "e");     //Orange
console.log("Orange" - "s");    //Nan
console.log("4" + "8");         //48
console.log("4" - "8");         //-4
console.log("name" + 3);        //name3
console.log("name" - 3);        //NaN
console.log(82 * "word");       //Nan
console.log(1 + "hello");       //1hello
console.log("hello" + 1);       //hello1
console.log(1 + true);          //2
console.log("hello" + true);    //hellotrue
console.log(typeof (Infinity)); //number
console.log(1 == '1');          //True
console.log(1 === '1');         //False

// Strings 

//one
let name = "Welcome to Orange";

console.log(name.toUpperCase());
console.log(name.substr(8, 2));
console.log(name.replace("Welcome to" , "Hello From"));
console.log(name.toLowerCase());
console.log(name.length);
console.log('Welcome to "Orange" '.replace(name));
console.log(name.concat(" Jordan"));

// two

let name2 = "cactus";

let result = name2.charAt(0)+(name2.slice(1)).replaceAll(name2.charAt(0) , "*") //name2.charAt(0)
console.log(result);