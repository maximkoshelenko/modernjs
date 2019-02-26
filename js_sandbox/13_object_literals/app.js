const person = {
    firstName: 'Maksim',
    lastName: 'Koshelenko',
    age: 34,
    email: 'maximkoshelenko@gmail.com',
    hobbies: ['MotoGP', 'WorldSBK', 'Guitar', 'Codding', 'CrossFit'],
    address: {
        city: 'Dnipro',
        state: 'Sicheslavska oblast',
    },
    getBirthYear: function () {
        return new Date().getFullYear() - this.age; //!!!!!!! very cool
    },
}

let val;

val = person;

// Get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];

val = person.getBirthYear();

console.log(val);

const people = [
    { name: 'Maks', age: 33 },
    { name: 'Olka', age: 34 },
    { age: 34 },
];

people.forEach(person => {
    if(person.name){
        console.log(person.name)
    } else {
        console.log('I love you smartass');
    }
});