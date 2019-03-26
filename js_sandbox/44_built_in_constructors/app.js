// String

const name1 = 'Maksim';
const name2 = new String('Maksim'); // will be object !!!

// name2.maksim = 'Koshelenko'; // We can add values to this object
// console.log(name2)

// Will be YES
if (name1 === 'Maksim') {
    console.log('YES')
} else {
    console.log('NO')
}

// Will be NO
if (name2 === 'Maksim') {
    console.log('YES')
} else {
    console.log('NO')
}

// Number
const num1 = 5;
const num2 = new Number(5);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Function 
const getSum1 = function (x, y) {
    return x + y;
}
const getSum2 = new Function('x', 'y', 'return x + y');

// Object
const john1 = { name: 'John' };
const john2 = new Object({ name: 'John' });

// Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array([1, 2, 3, 4]);

// Regular Expression
const re1 = /\w+/; // will console \w+
const re2 = new RegExp('\\w+'); // we had to add one more \ to make it \w+

console.log(getSum2(1, 2));