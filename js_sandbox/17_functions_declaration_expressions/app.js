// FUNCTION DECLARATION

function greet(firstName = 'Maksim', lastName = 'Koshelenko') { // in this example we have defined default values (in case we ill not sent nothing to function)
    return `Hello ${firstName} ${lastName}`;
};

console.log(greet('Vasia', 'Pupkin'));

// FUNCTION EXPRESSION
const square = function (x = 3) {
    return x * x;
};

console.log(square(5));

// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS - IIFE's
(function () {
    console.log('IFFE ran...');
})();

(function (name = 'Vasia') {
    console.log(`IFFE ran... with ${name}`);
})('Brad');

const toDo = {
    doSomething: function () {
        console.log('We are start doing something');
    },
    doSomethingElse: function () {
        console.log('We are start doing something else');
    }
};

toDo.doSomething();