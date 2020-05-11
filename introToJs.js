
let firstName = 'Frankie';
let lastName = 'Ani';

const fullName = `${firstName} ${lastName}`;
console.log(firstName + " " + lastName);


console.log(`${firstName} ${lastName}`); 
//interpolation  (does the same thing as old concatenation but is es6 2015)

console.log(`         ${firstName} ${lastName}`.length); 
//.length (outputs the lenght of the string including spaces or even bigger spaces)

console.log(`         ${firstName} ${lastName}`.trim().length); 
//.trim().length (outputs the lenght of the string but trims out all the spaces)

console.log(`${firstName} ${lastName}`.split('')); 
//.split() returns the string to become an array, 
//.split() outputs the two strings as an array
//.split('') outputs each single letter as an argument in an array
//.split(' ') outputs each string as an argument in an array
//.length .split() .trim() are called string methods
 
console.log(typeof firstName); //typeof will tell you the data type



//numbers
let example = 21.5;

console.log(example);
console.log(parseInt (example)); //will throw in the integer of the number
console.log(parseFloat (example)); //will throw in the float value if there is one
console.log(example.toFixed(5)); //will set the number in the function to 5 places exactly

let example1 = parseInt("Hello 33 World 22");
let example2 = parseFloat('44 Dylan 33');
let example3 = 55.3333.toFixed(0);
let example4 = 200.0.toFixed(2);

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);