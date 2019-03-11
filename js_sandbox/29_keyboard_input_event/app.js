const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.getElementById('select');


// Clear input
taskInput.value = '';

// Submit event
//form.addEventListener('submit', runEvent);
// Keydown
// taskInput.addEventListener('keydown', runEvent);
// Keyup
//taskInput.addEventListener('keyup', runEvent);
// Keypress
// taskInput.addEventListener('keypress', runEvent);
// Focus
// taskInput.addEventListener('focus', runEvent);
// Blur
// taskInput.addEventListener('blur', runEvent); // un-focus event
// Cut
// taskInput.addEventListener('cut', runEvent); 
// Paste
// taskInput.addEventListener('paste', runEvent); 
// Copy
// taskInput.addEventListener('copy', runEvent); 
// Input
// taskInput.addEventListener('input', runEvent); 
// Change
select.addEventListener('change', runEvent);


function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);
    
    //console.log(e.target.value);

    heading.innerText = e.target.value;
    // Get input value
    //console.log(`${taskInput.value}`)    
    //e.preventDefault();
}