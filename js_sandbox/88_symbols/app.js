// Create a symbol
const sym1 = Symbol();
const sym2 = Symbol('sym2');

// Will logout that Symbol is primitive type
console.log(typeof sym2);
// Symbols can not be equal even with identical identifiers
console.log(Symbol('Id1') === Symbol('Id1'));
// Convert Symbol
console.log(`Hello ${String(sym2)}`);
// or
console.log(`Hello ${sym2.toString()}`);

// Unique object keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.KEY3 = 'Prop3';
myObj.KEY4 = 'Prop4';

// Symbols are not enumerable in for...in
console.log('____________');
for (let i in myObj) {
    console.log(`${i}: ${myObj[i]}`);
}
console.log('____________');
// Symbols are ignored by JSON.stringify()
console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));