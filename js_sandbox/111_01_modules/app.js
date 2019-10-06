// Common JS module syntax
const person1 = require('./mymodule1');

// ES2015 Module
import { person, sayHello } from './mymodule2.js';
import * as mod from './mymodule2.js';
import greeting from './mymodule2.js';


console.log(person1.name);
console.log(person.name);
console.log(person.sayHello());
console.log(mod.person.name);
console.log(mod.person.sayHello());
console.log(greeting);