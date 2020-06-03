
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

console.log(example1);//if your string start with a number, parse will pull out the first number. If not it will throw in NaN
console.log(example2);//in this case, parseFloat will show the floating value of this string's first number
console.log(example3);//nb: toFixed outputs a string value. use typeof to be confirm
console.log(example4);//outputs 200.00

//boolean
true ,false //has to be one or the other

console.log(Boolean(true)) //the boolean() value tells the value of the paramter you give it

let name = "My Name";
console.log(Boolean(name)); //outputs true because name is true because it has been declared and initialised

let sample1 = false;
let sample2 = true;
let sample3 = null;
let sample4 = undefined;
let sample5 = '';
let sample6 = NaN;
let sample7 = -5;
let sample8 = 0;
let sample9 = ' ';

// console.log(Boolean(sample1)); //falsy
// console.log(Boolean(sample2)); //truthy
// console.log(Boolean(sample3)); //falsy
// console.log(Boolean(sample4)); //falsy
// console.log(Boolean(sample5)); //falsy
// console.log(Boolean(sample6)); //falsy
// console.log(Boolean(sample7)); //truthy 
// console.log(Boolean(sample8)); //falsy
// console.log(Boolean(sample9)); //truthy //compare with example5



//Arrays
let arrays1 = [5, 6, 7];

console.log(arrays1.length) //outputs the number of values inside the array
console.log(arrays1[0]); //to get the first index value

arrays1.push(8, 9, 10);//adds all the values to the end of the array
arrays1.pop(); //removes the last value of the array
console.log(arrays1)

arrays1.forEach((element) => {
    console.log(element)
});//this will iterate through the array an display each of them as output one after the other


let challenge3 = ['Dylan', 5, true];

let challenge3A = challenge3;

challenge3A.push(11);

console.log(challenge3); //this outputs the same as challenge 3A because when u initailise two variables, you're saying both are going to be doing the same thing... (passing by reference)
console.log(challenge3A); //passing by reference, it is not creating a new array

//ways not to pass by reference:
let challenge3B = ['Dylan', 5, true];

let challenge3c = [...challenge3B]; //spread operator

//or

challenge3c = challenge3B.map((element) => {
    return element;
}) 

challenge3c.push(11);

//most times you'd want to create a new array tho
console.log(challenge3B); //this outputs the same as challenge 3A because when u initailise two variables, you're saying both are going to be doing the same thing... (passing by reference)
console.log(challenge3c);



