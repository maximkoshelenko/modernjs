const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);
// Double click
// clearBtn.addEventListener('dblclick', runEvent);
// Mouse down
// clearBtn.addEventListener('mousedown', runEvent);
// Mouse up
// clearBtn.addEventListener('mouseup', runEvent);
// Mouseenter
// card.addEventListener('mouseenter', runEvent); // work only with main element
// Mouseleave
// card.addEventListener('mouseleave', runEvent); // work only with main element
// Mouseover
// card.addEventListener('mouseover', runEvent); // work with main element and with child
// Mouseout
// card.addEventListener('mouseout', runEvent); // work with main element and with child
// Mousemove
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
    // heading.innerHTML = `${e.clientY} : ${e.clientX}`; // if we want to update element
    heading.textContent = `Mouse Y: ${e.clientY} Mouse X: ${e.clientX}`; // if we want to update only text inside but keep it as h5 
    console.log(`EVENT TYPE: ${e.type}`);
    document.body.style.backgroundColor = `rgb(${e.clientY}, ${e.clientX}, 40)`;
}