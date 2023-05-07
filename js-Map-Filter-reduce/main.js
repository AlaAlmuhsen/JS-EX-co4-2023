/* ********************************* */
console.log("********** 1 **********");

function cleanNames (array) {
    array = array.map( (item) => item.trim());

    return array;
}
console.log(cleanNames([" injustice", " SuperMan", "Batman ", " flash "]));

/* ********************************* */
console.log("********** 2 **********");

function milesToKm(miles) {
    miles = miles.map( (item) => (item * 1.609344).toFixed(2));
    return miles;
}
console.log(milesToKm([10, 20, 30, 40]));

/* ********************************* */
console.log("********** 3 **********");

function sumAndSquareAvg (array) {
    return (array.map( item => item**2 ).reduce((sum , item) => sum+item , 0)) / array.length;
}

console.log(sumAndSquareAvg([1, 2, 3, 4, 5]));

/* ********************************* */
console.log("********** 4 **********");

function plus4 (array) {
    array = array.map( (item) => item+=4 );
    return array;
}

console.log(plus4([1 , 2 , 3]));


/* ********************************* */
console.log("********** 5 **********");

function evenDoubleEven (array) {
    return array.filter( i => i % 2 == 0).map(i => i*2).reduce((i , sum) => sum+i);
}

console.log(evenDoubleEven( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
/* ********************************* */
console.log("********** 6 **********");

function upperCaseWords (array) {
    array =  array.map( item => item.toUpperCase())
    return array;
}

console.log(upperCaseWords(["apple", 'banana', 'cherry', 'date']));

/* ********************************* */
console.log("********** 7 **********");

var heros = [
    {name: 'Iron Man', power: 'Tech'},
    {name: 'Spider-Man', power: 'Spider abilities'},
    {name: 'Thor', power: 'Godly powers'},
    {name: 'Hulk', power: 'Super strength'}
]

console.log(heros);

    heros = heros.map(function (obj) {
        obj["hero"] = obj["name"];
        delete obj["name"];
        return obj;
    });
    heros = heros.map(function (obj , i) {
        obj["Id"] = i++;
        return obj;
    });

console.log(heros);



/* ********************************* */
console.log("********** 6 **********");