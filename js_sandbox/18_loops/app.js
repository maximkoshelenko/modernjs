// FOR LOOP
for (let i = 0; i <= 10; i++) {
    if (i === 2) {
        console.log(`It will not log NUMBER ${i} due to CONTINUE statement`);
        continue;
    }

    if (i === 5) {
        console.log(`It will break after ${i} due to BREAK statement`);
        break;
    }

    console.log(`NUMBER ${i}`);
}

// WHILE LOOP

// DO WHILE LOOP

//FOREACH LOOP

let bikes = ['Ducati', 'Triumph', 'MV Agusta', 'BMW', 'Yamaha', 'Kawasaki', 'Honda', 'Suzuki'];

bikes.forEach(bike => {
    console.log(bike);
});

bikes.forEach(function (bike, index, array) { // index of th array and array itself also can be passed to foreach loop
    console.log(`${index} : ${bike}`);
});

//MAP
const users = [
    {id: 1, name: 'Maks'},
    {id: 2, name: 'Olka'},
];

const ids = users.map(function (user){
    return user.id;
})

console.log(ids);

// FOR IN LOOP

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for(let x in user){
    console.log(`${x} : ${user[x]}`)
}