// Object.prototype
// Person.prototype

// Person constructor 
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.age = age;
    //console.log(this); // will log function scope
    this.birthday = new Date(dob);
    // this.calculateAge = function () {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

// Calculate age
Person.prototype.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// Get full name
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
};

// Get Married
Person.prototype.getsMaried = function (newLastName) {
    this.lastName = newLastName;
}

const maks = new Person('Maksim', 'Koshelenko', '11-17-85');
const olka = new Person('Olga', 'Vasilets', '01-07-84');

console.log(olka);
console.log(maks.calculateAge());
console.log(olka.getFullName());
olka.getsMaried('Koshelenko');
console.log(olka.getFullName());
console.log(olka.hasOwnProperty('firstName'));
console.log(olka.hasOwnProperty('getFullName'));
console.log(Person.prototype.hasOwnProperty('getFullName'));