// Strings
const firstName = 'Maksim';
const lastName = 'Koshelenko';
const age = 33;
const greeting = 'Hello my Name is Maks nice to meet you';

let val;

val = firstName + lastName;

//Concatenation
val = firstName + ' ' + lastName;

//Append
val = 'Brad ';
val += 'Traversy' // output Brad Traversy

//Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat
val = firstName.concat(' ', lastName);

//Change Case
val = firstName.toUpperCase();
val = lastName.toLowerCase();

val = firstName[0]; // 0 element from string array

// indexOf
val = firstName.indexOf('m');
val = firstName.lastIndexOf('m');

// charAt()
val = firstName.charAt(2);
val = firstName.charAt('2');

//Get last char
val = firstName.charAt(firstName.length -1);

// substring
val = firstName.substring(0,4);

// slice()
val = firstName.slice(0,4);  
val = firstName.slice('0,4');  
val = firstName.slice(-4); // last 4 chars
val = firstName.slice('-3'); // last 3 chars

// split()
val = greeting.split(' ')

// replace()
val = greeting.replace('Maks', 'Vasia');

// includes();
val = greeting.includes('Vasia');

console.log(val);