console.log("********** 1 **********");

var person = { 
    name: "Adam", 
    age: 25, 
    gender: "male" 
};

console.log(person.name);
console.log(person.age);
console.log(person.gender);

console.log("********** 2 **********");

var person = { 
    name: "Adam", 
    age: 25 
}
person.gender = "male";

console.log(person.name);
console.log(person.age);
console.log(person.gender);

console.log("********** 3 **********");

var person = { 
    name: "Adam", 
    age: 25 
}
person['gender'] = "male";

console.log(person.name);
console.log(person.age);
console.log(person.gender);


console.log("********** 4 **********");

console.log(person.name);

console.log("********** 5 **********");

console.log(person["name"]);

console.log("********** 6 **********");

for (const item in person) {
    console.log(item + ": " + person[item]);
}

console.log("********** 7 **********");

console.log(Object.keys(person));

console.log("********** 8 **********");

console.log(Object.values(person));

console.log("********** 9 **********");

console.log(Object.entries(person));

console.log("********** 10 **********");

let address = {city: "tareq"};
console.log(Object.assign(person , address));


console.log("********** 11 **********");

console.log(Object.freeze(person));

console.log("********** 12 **********");

console.log(Object.seal(person));