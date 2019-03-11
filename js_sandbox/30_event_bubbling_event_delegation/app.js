// EVENT BUBBLING
// document.querySelector('.card-title').addEventListener('click', function () {
//     console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function () {
//     console.log('card-content');
// });

// document.querySelector('.card').addEventListener('click', function () {
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function () {
//     console.log('col');
// });

// EVENT DELEGATION


// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', deleteItem); // this solution will not work if we have more ten one element with .delete-item class

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
    // if (e.target.className === 'material-icons') {
    //     console.log('delete item');
    // }
    
    // if (e.target.parentElement.className === 'delete-item secondary-content') {
    //     console.log('delete item');
    // }
    
    // if (e.target.parentElement.classList.contains('delete-item')) {
    //     console.log('delete item');
    // }
    
    if (e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.remove();
    }
}