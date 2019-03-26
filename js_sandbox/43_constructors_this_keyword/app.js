// Object Literal - IT IS NOT OOP approach
let myObject = {
    sProp: 'some string value',
    numProp: 2,
    bProp: false
};

// OOP approach

// Person constructor, constructors always starts from the capital
function Person(name, dob) {
    this.name = name;
    // this.age = age;
    //console.log(this); // will log function scope
    this.birthday = new Date(dob);
    this.calculateAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

// const person1 = new Person('Vasia', 36);
const person1 = new Person('Vasia', '10-17-1985');

console.log(person1.calculateAge());
// console.log(this); // will log Window object when ran on global scope

// this.alert(1); // it will work because alert is part of window object