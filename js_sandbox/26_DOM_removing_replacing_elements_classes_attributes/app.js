// REPLACE THE ELEMENT

//Create element
const newHeading = document.createElement('h2');
//ID adding
newHeading.id = 'task-title';
//New text node
newHeading.appendChild(document.createTextNode('Tasks List'));

//Get the old heading
const oldHeading = document.getElementById('task-title');
//Parent
const cardAction = document.querySelector('.card-action');

//Replace child of a parent
cardAction.replaceChild(newHeading, oldHeading);
//Replace one element instead of other without a parent
newHeading.replaceWith(oldHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//Remove list item
lis[0].remove();

//Remove child element
list.removeChild(lis[3])

// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0]; 

let val;

//Classes
val = link.className;
val = link.classList; // it will return DOMTokenList
val = link.classList[0];
link.classList.add('test'); // add a class to element
link.classList.remove('test'); // remove a class to element

//Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'YEAH');
link.removeAttribute('title');
val = link.hasAttribute('href'); //Check is there an attribute

console.log(val);