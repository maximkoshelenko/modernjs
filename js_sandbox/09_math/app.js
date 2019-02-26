const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

// Math object
val = Math.PI;
val = Math.E;
val = Math.round(2.8);
val = Math.ceil(2.1); // output 3
val = Math.floor(2.2); // output 2
val = Math.sqrt(25); // output 5
val = Math.abs(-5); // output 5
val = Math.pow(5, 3); // output 125
val = Math.min(5, 3, 126, 1, -2); // output -2
val = Math.max(5, 3, 126, 1, -2); // output 126
val = Math.random(); // output random number less that 0.9
val = Math.floor(Math.random() * 20 + 1); // output of random number between 1 and 20 


console.log(val);