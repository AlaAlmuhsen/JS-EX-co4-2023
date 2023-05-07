// 1
var outPut = "";
for (let index = 1; index <= 10; index++) {
    outPut = outPut + " " + index;
}
console.log(outPut);

//2
var outPut = "";
var counter = 1;
while (counter <= 10) {
    outPut = outPut + " " + counter;
    counter++;
}
console.log(outPut);

//3
var outPut = "";
var array = [1, 2, 3, 4, 5];
for (let index = 0; index < array.length; index++) {
    outPut = outPut + " " + array[index];
}
console.log(outPut);

//4
var outPut = "";
for (let index = 0; index <= 10; index++) {
    if (index % 2 == 0) {
        outPut = outPut + " " + index;
    }
}
console.log(outPut);

//5
var sum = 0;
for (let index = 1; index <= 10; index++) {
    sum += index;
}
console.log(sum);

//6
var array = [1, 2, 3, 4, 5];
var max = array[0];
for (let index = 0; index < array.length; index++) {
    if (max < array[index]) {
    max = array[index];
    }
}
console.log(max);

//7
var array = [1, 2, 3, 4, 5];
var min = array[0];
for (let index = 0; index < array.length; index++) {
    if (min > array[index]) {
    min = array[index];
    }
}
console.log(min);

//11
var array = [1, 2, 3, 4, 5];
var sum = 0;
for (let index = 0; index < array.length; index++) {
    sum+=array[index];
}
console.log(sum / array.length);

//12

function factorial (number) {
    let result = 1
    for (let index = 1; index <= number; index++) {
        result*=index
    }
    return result;
}
console.log(factorial(5));

//13

function fibonacci (number) {
    let n1 = 0 , n2 = 1 , n3;
    while (n2 <= number  ) {  // 0 1 1 2 3 5 8 13
        n3 = n2 + n1; //11
        if (n3 > number) {
            break;
        }
        n1 = n2;      //8
        n2 = n3;      //11
    }
    return n2;
}
console.log(fibonacci(10));
console.log("test");


//14
console.log("********** 14 **********"); 

function primeNumber(number) {
    for (let i = 2; i <= number; i++) {
        let prime = true;
        for (let j = 2; j < i; j++) {
            if (i % j == 0)
                prime = false;
        }
        if (prime) {
            console.log(i);
        }
    }
}
primeNumber(6);

//15 
console.log("********** 15 **********"); 

function multiplication(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} X ${i} = ${i*number}`);
    }
}

multiplication(5);

//16
console.log("********** 16 **********"); 

var array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (let i = 0; i < array.length; i++) {
    var outPut = " "
    for (let j = 0; j < array[i].length; j++) {
        outPut+= " " + array[i][j];
    }
    console.log(outPut);
}


//17
console.log("********** 17 **********"); 
var array = [1, 2, 3, 4, 5];
var outPut = ""
for (let i = array.length-1; i >= 0; i--) {
    outPut += (array[i] + " ");
}
console.log(outPut);

//18    
console.log("********** 18 **********"); 
var array = [1 , 2 , 3 , 4 , 5 ]; 
let start = 2 , end = 4;

var outPut = "";
for (let i = start; i <= end; i++) {
    outPut += array[i] + " ";
}
console.log(outPut);

//19
console.log("********** 19 **********"); 
var array = [1 , 2 , 3 , 4 , 5 ]; 

var outPut = "";
for (let i = 0; i < array.length; i+=2) {
    outPut += array[i] + " ";
}
console.log(outPut);

//20
console.log("********** 20 **********"); 
var array = [1 , 2 , 3 , 4 , 5 ]; 
var flag = false;
var number = 3;
for (let i = 0; i < array.length; i++) {
    if (array[i] == number){
        flag = true;
        break;
    }
}
console.log(flag);

//21
console.log("********** 21 **********"); 
var array = [1, 2, 1, 3, 2, 1];
var number = 1;
var counter = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] == number){
        counter++;
    }
}
console.log(counter);

