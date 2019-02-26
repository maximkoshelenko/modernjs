// Create an array
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple','Banana','Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get array length
val = numbers.length;

// Check if is array
val = Array.isArray(numbers); // true

// Get single value
val = numbers[1]; //56

// Insert into array
numbers[2] = 100;

// Find index of value
val = numbers.indexOf(36); 

// MUTATING ARRAYS
// Add on to end
numbers.push(250);
// Add on to front
numbers.unshift(13);
// Take off from end
numbers.pop();
// Take off from the front
numbers.shift();
// Splice values
numbers.splice(1,2); // it will delete 2 elements from position 1 to position 2
// Reverse the array
numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
val = numbers.sort(); // will be sorted by first digit

// Use the "compare function"
val = numbers.sort(function (a, b) {
    return b-a;
});
val = numbers.sort(function (a, b) {
    return a-b;
});

// Find
function under50(num){
return num < 50;
};
val = numbers.find(under50);


console.log(numbers);
console.log(val);