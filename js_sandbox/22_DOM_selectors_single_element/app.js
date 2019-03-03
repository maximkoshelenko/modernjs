// document.getElementById();
let element = document.getElementById('login');

// Get things from the element
element = document.getElementById('login').id;
element = document.getElementById('login').className;

const testCourse = document.getElementById('testCourse'); 
const createAccount = document.getElementById('create-account'); 
const pleaseLogIn = document.getElementById('pleaseLogIn'); 


// Change styling
testCourse.style.background = 'black';
createAccount.style.display = 'none';

// Change content
pleaseLogIn.textContent = 'none';
pleaseLogIn.innerText = 'I have changed inner text of element';
pleaseLogIn.innerHTML = '<span style="color:red">Test HTML injection</span>';

// document.querySelector();


console.log(document.querySelector('#pleaseLogIn'));
console.log(document.querySelector('.indigo-text'));
console.log(document.querySelector('h5'));

document.querySelector('#mySuperForm #testCourse:last-child').style.background = 'yellow';
document.querySelector('#mySuperForm #testCourse:nth-child(3)').style.background = 'red';
document.querySelector('.validate:nth-child(4)').textContent = 'Hello World';
/*
odd
Represents elements whose numeric position in a series of siblings is odd: 1, 3, 5, etc.
even
Represents elements whose numeric position in a series of siblings is even: 2, 4, 6, etc.
*/
document.querySelector('.validate:nth-child(odd)').textContent = 'Hello World';
