// document.querySelector('.clear-tasks')
//     .addEventListener('click', function (e) {
//         console.log('Hello World')
//         //button has google link in it but we prevent default behavior with preventDefault() function
//         e.preventDefault();
//     });

document.querySelector('.clear-tasks')
// document.querySelector('body')
    .addEventListener('click', onClick);

function onClick(event) {
    // console.log('Clicked');

    let val;

    val = event;

    // Event target element
    val = event.target;
    val = event.target.id;
    val = event.target.className; // get all classes from target element
    val = event.target.classList; // get collection of classes 

    event.target.innerText = 'Hello'; // will change text inside the button after click

    // Event type
    val = event.type;

    // Time Stamp
    val = event.timeStamp
    
    // Coordinates event relative to the window
    val = event.clientY;
    val = event.clientX;

    // Coordinates relevant to the element
    val = event.offsetY;
    val = event.offsetX;


    console.log(val);
};