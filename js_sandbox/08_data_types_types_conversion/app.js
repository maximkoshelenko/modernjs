/*
// More then one key value
const person = {
    name: 'Maksim',
    age: '33'
}

// Ve can change data inside but we cannot resign
person.name = 'Valentin'

console.log(person);

// Same thing with arrays

const numbers = ['1', '2', '3', '4', '5'];
numbers.push('6');

console.log(numbers);
-------------------------------------------------------------------
*/

/*
// Data Types is JavaScript
//typeof operator for understanding type of variable 

// PRIMITIVES TYPES
// String
const name = 'Maksim Koshelenko';
// Number should not contain quotes
const age = 33;
// Boolean
const hasKids = true;
// Null
const car = null;
// Undefined
let wife;
// Symbol
const sym = Symbol();

// REFERENCE TYPES
//Arrays
const hobbies = ['crossfit','programming']; 
// Object literals
const address = {
    city: 'Dnipro',
    state: 'Sicheslavska'
}
// Date
const today = new Date();

console.log(typeof today)
----------------------------------------------------------------------
*/

/*
// TYPE CONVERSION
let val;

// Number to string
val = 3;
val = String(val);
val = String(4+4);

//Boolean to a string
val = true;
val = String(val);
val = String(false);

//Date to a string
val = new Date();
val = String(val);
val = String(new Date());

//Array to string
val = [1,2,3,4];
val = String(val);
val = String([5,6,7,8]);

//toString() method
val = 5;
val = val.toString();
val = (6).toString();
val = (true).toString();

//String to number
val = Number('5');

val = Number(true); //output 1
val = Number(false); //output 0
val = Number(null); //output 0
val = Number('hello'); //output NaN
val = Number([1,2,3]); //output NaN

val = parseInt('100');// output 100
val = parseFloat('100.32')// output 100.32

console.log(val);
console.log(typeof val);

// working only to Numbers console.log(val.toFixed());

// working only to Strings, Arrays and Objects console.log(val.length);
---------------------------------------------------------------------------
*/