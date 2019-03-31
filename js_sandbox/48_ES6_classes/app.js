class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName) {
        this.lastName = newLastName;
    }

    static addNumbers(x, y) {
        return x + y;
    }
}

const maksim = new Person('Maksim', 'Koshelenko', '11-17-85');
const olka = new Person('Olga', 'Vasilets', '01-07-84');

console.log(olka);
console.log(olka.greeting());
console.log(olka.calculateAge());
olka.getsMarried(maksim.lastName);
console.log(olka.greeting());

console.log(Person.addNumbers(1,2));