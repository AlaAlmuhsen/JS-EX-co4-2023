//1
console.log("********** 1 **********");
var array = [1,2,3,4,5];
array.forEach(element => console.log(element));

//2
console.log("********** 2 **********");
var array = [1, 2, 3, 4, 5];
array = array.map(f => f*2);
console.log(array);

//3
console.log("********** 3 **********");
var array = [1, 2, 3, 4, 5];
array = array.filter(n => n % 2 == 0);
console.log(array);


//4
console.log("********** 4 **********");
var array = [1, 2, 3, 4, 5];
let sum = array.reduce ((sum , n) => sum + n , 0 );
console.log(sum);


//5
console.log("********** 5 **********");
array = ["banana", "apple", "cherry"];
array.sort();
console.log(array);

//6
console.log("********** 6 **********");
array = ["apple", "banana", "cherry"];
array.reverse();
console.log(array);

//7
console.log("********** 7 **********");
var ar1 = [1, 2, 3], ar2 = [4, 5, 6];
array = ar1.concat(ar2);
console.log(array);

//8
console.log("********** 8 **********");
array = [1, 2, 3, 4, 5, 6];
array =  array.slice(2 , 4);    
console.log(array);

//9
console.log("********** 9 **********");
array = [1, 2, 3, 4, 5, 6];
array.splice(2 , 4 - 2);
console.log(array);

//10
console.log("********** 10 **********");
array = [1, 2, 3, 4, 5];
console.log(array.indexOf(3));

//11
console.log("********** 11 **********");
array = [1, 2, 3, 4, 5];
let stringArray = array.join();
console.log(stringArray);

//12
console.log("********** 12 **********");
stringArray = "1,2,3,4,5";
array = stringArray.split(",");
console.log(array);

//13
console.log("********** 13 **********");
console.log("length of an array = " + array.length);

//14
console.log("********** 14 **********");
array = [1, 2, 3, 4, 5];
for (const iterator of array) {
    console.log(iterator);
}

//15
console.log("********** 15 **********");
array = [1, 2, 3, 4, 5];
for (const key in array) {
    if (array.hasOwnProperty.call(array, key)) {
        const element = array[key];
        console.log(element);
    }
}

//16
console.log("********** 16 **********");
array = [1, 2, 3, 4, 5];
console.log(Array.isArray(array));

//17
console.log("********** 17 **********");
let object = {0: "a", 1: "b", 2: "c", length: 3};
array = Array.from(object);
console.log(array);

//18
console.log("********** 18 **********");
array =  Array.of(1 , 2 , 3);
console.log(array);

//19
console.log("********** 19 **********");
array = [1, 2, 3, 4, 5];    
array = array.fill(0 , 0 , 3);
console.log(array);

//20
console.log("********** 20 **********");
array = [1, 2, 3, 4, 5];    
array =  array.copyWithin(0 , 1 , 3);
console.log(array);
