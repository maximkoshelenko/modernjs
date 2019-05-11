/*
ITERATOR
*/
// Iterator example
function nameIterator(names) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < names.length ?
                { value: names[nextIndex++], done: false } :
                { done: false }
        }
    }
}

// Create an array of names 
const namesArr = ['Maks', 'Yena'];
// Init iterator and pass in the names array 
const names = nameIterator(namesArr);
// Iterate throw
console.log(names.next());
console.log(names.next());
console.log(names.next());

/*
GENERATOR
*/
// Generator example - ADD * after function word
function* sayNames() {
    yield 'Olka';
    yield 'Yupik';
}
// Set variable to generator
const name = sayNames();
// Test
console.log(name.next());
console.log(name.next());
console.log(name.next());

// ID generator

function* generateIDs(){
    index = 0;
    while(true){
        yield index++;
    }
}

const gen = generateIDs();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next());