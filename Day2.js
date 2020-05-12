//objects

let object1 = {
    firstName: 'Dylan',
    lastName: 'Israel'
};//objects take in properties

console.log(object1);
console.log(object1.firstName); //will throw in the value of the property

//selecting the objects value to log out
let object2 = {
    firstName: 'Dylan', //property (key: 'value')
    lastName: 'Israel',
    address: {
        city: 'Austin',
        state: 'Texas'
    },
    age: 30,
    cats: ['Milo', 'Tito', 'Achieles']
};

object2.age = 31; //u can update the particular value of a key this way

console.log(object2.address.city);
console.log(Object.keys(object2));//to output all the keys (does not print the nested keys)
console.log(Object.values(object2));//to output all values
console.log(object2.hasOwnProperty('age'));//returns boolean to find if a particular key is in our object


//objects Challenge
let object3 = {
    firstName: 'Dylan'
};

let object4 = object3;

object4.lastName = 'Israel';

// object4.lastName.age = 34; (will throw an error because you can only add a value to the variable u named)
console.log(object3); //{firstName: 'Dylan', lastName: 'Israel'}
console.log(object4); //{firstName: 'Dylan', lastName: 'Israel'}
