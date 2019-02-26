// Global Scope

var a = 1;
let b = 2;
const c = 3;

function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Functional Scope: ', a, b, c);

};

if (true) {
    var a = 7; // This one is overwrite our global scope
    let b = 8;
    const c = 9;
    console.log('Block Scope: ', a, b, c);
};

for (var a = 0; a < 10; a++) { // var overwrite global too
    console.log(`Loop: ${a}`)
};

test();
console.log('Global Scope: ', a, b, c);