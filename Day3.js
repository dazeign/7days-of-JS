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

solve += 5; //solve = solve + 1; you can use all other arithmetic operators

console.log(solve);


//if, else if 

let stateMent = 5;

if (stateMent === 6) { // will run if the condition is true, in this case, it's false
    console.log('Runs');
} else if ( false ) { //or else try this if statement (thats what an ELSE IF says)
    console.log('else if');
} else {
    console.log('else'); //then it falls back to this
}
//there caan be nested

//And & Or

let andOr = 5;
if (andOr == 5 && andOr ===5 ) { // will run only because both are true 
    console.log('Yeah')
}

let orAnd = 5;
if (orAnd == 6 || orAnd == 5) { //will run because one of both is true
    console.log('Yeah MAn!')
}

//&& and || help us to concatenate values


//challenge

console.log(10 === 10 && 5 < 4); //false

console.log(10 === 10 || 5 < 4); // true
console.log((5 >= 5 || 4 > 4) && 3 + 2 === 5); //true


//switch statements
let studentAnswer = 'C';

switch(studentAnswer) { //master the syntax, it does the command of the case given 
    case 'A': 
        console.log('A is wrong.');
        break;
    case 'B' :
        console.log('B is wrong.');
        break;
    case 'C':
        console.log('C is correct.');
        break;
    default:
        console.log('None');
        break; //this is what the switch statement falls back to if none are correct
}

/*let toothPick = 'red';
let book = 'brown';

switch (toothPick, book) {
    case 'red':
        console.log('You choose the colour of the toothpick');
                
        break;

    case 'brown':
        console.log('You choose the colour of the book');
        
        break;
}*/ //rough work

//for loops

let total = 0;

let numArray = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for (let i = 0; i < numArray.length; i++) {
    
    total += numArray[i];
}

console.log(total); //remember to read more about this later



//do and while loops

