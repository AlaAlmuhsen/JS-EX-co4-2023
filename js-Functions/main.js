console.log("********** 1 **********");

function findSmallest (array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array [i] < min){
            min = array[i];
        }
    }
    return min;
} 
var array = [5,7,4,3,9,6];
console.log(findSmallest(array));


console.log("********** 2 **********");

function AlphabeticalOrder (word) {
    var array = word.split("").sort();
    
    return array.join("");
}

console.log(AlphabeticalOrder("bax"));

console.log("********** 3 **********");

function factorial (number) {
    let sum = 1;
    for (let i = 1; i <= number; i++) {
        sum*=i;
    }
    return sum;
}

console.log(factorial(8));


console.log("********** 4 **********");

function oddOrEven (number) {
    if (number % 2 == 0) {
        console.log("Even");
    }
    else {
        console.log("Odd");
    }
}

oddOrEven(5);

console.log("********** 5 **********");

function evenNum (array) {
    array = array.filter(item => item % 2 == 0) 
    return array;
}

var array = [1 , 2 , 3 , 4 , 6];
console.log(evenNum(array));

console.log("********** 6 **********");

function numbersOnly(arr) {
    return arr.filter((item) => typeof item !== "string");
}

array = [ 4 , "jh", "jh" , "jh"];
console.log(numbersOnly(array));

console.log("********** 7 **********");

function addUp (number) {
    if (number == 0) {
        return 0;
    }
    return number + addUp(number-1);
}

console.log(addUp(8));


console.log("********** 9 **********");

function convertToRoman(num) {
    const romanNumeralMap = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];
    let romanNumeral = '';
    for (let i = 0; i < romanNumeralMap.length; i++) {
        while (num >= romanNumeralMap[i].value) {
            romanNumeral += romanNumeralMap[i].symbol;
            num -= romanNumeralMap[i].value;
        }
    }
    return romanNumeral;
}

console.log(convertToRoman(1989));

console.log("********** 10 **********");

function countWords (word) {
    let array = word.split(" ");
    return array.length;
}

console.log(countWords("aaa aa aa aa"));

console.log("********** 11 **********");

function MultiplyByLength (array) {
    return array.map( (i) => i * array.length);
}

console.log(MultiplyByLength([1,2,3]));


console.log("********** 12 **********");

function checkEnding (str1 , str2) {
    return str1.charAt(str1.length - 1) == str2.charAt(str2.length - 1)
}

console.log(checkEnding ("ac" , "acdcc"));


console.log("********** 13 **********");

function repeatCharacters(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str[i] + str[i];
    }
    return result;
}

console.log(repeatCharacters("Orange"));


console.log("********** 14 **********");
console.log("********** 15 **********");