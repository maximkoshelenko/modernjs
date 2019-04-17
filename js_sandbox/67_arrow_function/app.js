// const sayHello = function () {
//     console.log('Hello');
// }

// const sayHello = () => {
//     console.log('Hello');
// }

// One line functions does not need braces
// const sayHello = () => console.log('Hello');

// One line returns 
// const sayHello = () => 'Hello'; 

// !!! Return Object literal
// const sayHello = () => ({msg: 'Hello'});

// With parameters: single param does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// More then one param need to be wrapped
const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

sayHello('Maks', 'Koshelenko'); 

const users = ['Nathan', 'John', 'William'];

// Doing the same thing )
// const nameLength = users.map(function (name) {
//     return name.length
// });
const nameLength = users.map(name => name.length);

console.log(nameLength);