//SET LOCAL STORAGE ITEM
// localStorage.setItem('name','John');
// localStorage.setItem('age', 39);

//SET SESSION STORAGE ITEM
// sessionStorage.setItem('name','Maks');

//REMOVE FROM STORAGE
// localStorage.removeItem('name');

//GET FROM STORAGE
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

//CLEAR LOCAL STORAGE
// localStorage.clear();

// console.log(name, age);

//FORM SUBMIT ADD TO STORAGE
document.querySelector('form').addEventListener('submit',
    function (e) {
        const task = document.getElementById('task').value;

        let tasks;

        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        tasks.push(task);

        localStorage.setItem('tasks', JSON.stringify(tasks));
        // localStorage.setItem('tasks', tasks); // With this submition only one value task can be stored, in above with JSON.parse we can store multiple items
        alert('Task saved');

        e.preventDefault();
    });

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(task => {
    console.log(task);
});

console.log(tasks);