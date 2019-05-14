// Destructuring Assignment
let a, b;
[a, b] = [100, 200];
// Rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];
({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
// Array destructuring
const people = ['John', 'Slon', 'Vasia'];
const [person1, person2, person3] = people;
// Parse array from function
function getPeople() {
    return ['John', 'Slon', 'Vasia'];
}

let person4, person5, person6;
[person4, person5, person6] = getPeople();

// Object destructuring;
const person = {
    name: 'John Doe',
    age: 32,
    city: 'Miami',
    gender: 'Male',
    sayHello: function () {
        console.log('Hello');
    }
}

// Old ES5
// const name = person.name,
//     age = person.age,
//     city = person.city,
//     gender = person.gender;

// New ES6 Destructuring
const { name, gender, city, age, sayHello } = person;

console.log(age);

sayHello();