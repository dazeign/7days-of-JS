//Arithmetic Operators
//Am not taking this module seriously because I know what he's teaching in this module

let modulus = 5 % 6; // returns 5

//relational operators
//they compare two values or variables and return a boolean

//<=, >=, ==, ===, !=, !==
//I've understood this, so no notes either

let arith1 = 10;
let arith2 = '10';

console.log(typeof arith1);//explaining ===
console.log(typeof arith2);
console.log(arith1 == arith2);
console.log(arith1 === arith2);

//challenge
let arithChallenge1 = 5 === 5; //truthy
let arithChallenge2 = 5 == '5'; //truthy
let arithChallenge3 = 6 != '6'; //falsy
let arithChallenge4 = 7 !== '7'; //truthy



//increment and decrement
let increment = 1;

increment++;//let increment = increment + 1; 

console.log(increment);

let solve = 1;

solve += 5; //solve = solve + 1; ypu can use all other arithmetic operators

console.log(solve);