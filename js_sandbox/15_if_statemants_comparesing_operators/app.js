const id = 100;

// Equal to value and type '===' 
// It will log incorrect because we are trying compare number and string
if (id === '100') {
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

// NOT EQUAL TO VALUE AND TYPE
if (id !== '100') {
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

// CHECK THAT SOMETHING IS DEFINED
// It will log No idUser because we have not defined it
if (typeof idUser !== 'undefined') {
    console.log(`The ID is ${idUser}`);
} else {
    console.log('NO idUser');
}

// Ternary operators
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES
if (id === 100)
    console.log('CORRECT');
else
    console.log('INCORRECT');