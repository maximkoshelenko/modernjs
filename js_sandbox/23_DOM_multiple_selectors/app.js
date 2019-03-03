// document.getElementsByClassName('');

// it will get all elements on global scope
// const items = document.getElementsByClassName('collection-item');
// this one will get elements only inside of ul
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');


// console.log(items);
// console.log(items[0]);

// items[0].style.color = 'red';
// items[1].style.backgroundColor = 'red';
// items[2].textContent = 'Try Me';

// console.log(listItems);

// document.getElementsByTagName('');

// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[2].textContent = 'Try Me Tag';

// ALL THIS COLLECTION IS NOT A ARRAY, IT IS ALL HTML COLLECTIONS
// convert html collection to Array
// lis = Array.from(lis);
// lis.reverse();

// lis.forEach(function(li, index) {
//     li.style.backgroundColor = 'yellow';
//     li.textContent = `${index}: Hello`
// });

// console.log(lis);

//document.querySelectorAll('');
// Here we can put multiple selectors
// And it is not a HTML collection it is a NODE list and we dont need convert it to Array it already working with an array methods
const items = document.querySelectorAll('ul li.collection-item');

items.forEach(item => {
    item.textContent = `: Hello`
});

//odd and even
const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');


liOdd.forEach(li => {
    li.style.backgroundColor = 'green';

});

// for loop also working with HTML collections without convertion too Array
for (let i = 0; i < liEven.length; i++) {
    liEven[i].style.backgroundColor = 'yellow';
}

console.log(items);