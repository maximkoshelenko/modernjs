// MAPS = key-value pairs - can use ANY type as a key or a value
const map1 = new Map();

const key1 = 'some string',
    key2 = {},
    key3 = function () { };

// Set map values by key
map1.set(key1, 'Value of key 1');
map1.set(key2, 'Value of key 2');
map1.set(key3, 'Value of key 3');

// Get value by key
console.log(map1.get(key3));

// Count map
console.log(map1.size);

// ITERATING MAPS

// Loop using for...of to get key and values
for (let [key, value] of map1) {
    console.log(`${key} = ${value}`);
}

// Iterate keys only
for (let key of map1.keys()) {
    console.log(`${key}`);
}

// Iterate value only
for (let value of map1.values()) {
    console.log(`${value}`);
}

// Loop using forEach
map1.forEach(function (value, key) {
    console.log(value);
    console.log(key);
});

// CONVERT MAPS TO ARRAYS

// Create an array of key value pairs
const keyValArr = Array.from(map1);

// Create an array of values
const valArr = Array.from(map1.values());

// Create an array of keys
const keysArr = Array.from(map1.keys());

console.log(keysArr);