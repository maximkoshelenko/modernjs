// SETS - store unique values of any type

const set1 = new Set();

// Add values to Set
set1.add(100);
set1.add('A string');
set1.add({ name: 'John' });
set1.add(true);
set1.add(100);

console.log(set1);

// Another way
// const set2 = new Set([1, true, 'string', function () { }, { name: 'Vasia' }]);
// console.log(set2);

// Check size
console.log(set1.size);

// Check for values
console.log(set1.has(100));
console.log(set1.has(50 * 4 / 2));
// It is reference value so thats mean that even vars with identical chars will not be equal 
console.log(set1.has({ name: 'John' })); // false

// Delete from set
set1.delete(100);

console.log(set1);

console.log('_____________________________');

// Iterating from set
for (let item of set1) {
    console.log(item);
}

// forEach
console.log('_____________________________');

set1.forEach(item => {
    console.log(item);
});

// Convert to Array

// Create an array of keys
const valArr = Array.from(set1);
console.log('_____________________________');

console.log(valArr);