let firstName = 'Frankie';
let lastName = 'Ani';

console.log(firstName + " " + lastName);


console.log(`${firstName} ${lastName}`); 
//interpolation  (does the same thing as old concatenation but is es6 2015)

console.log(`         ${firstName} ${lastName}`.length); 
//.length (outputs the lenght of the string including spaces or even bigger spaces)

console.log(`         ${firstName} ${lastName}`.trim().length); 
//.trim().length (outputs the lenght of the string but trims out all the spaces) .trim() is a string method