// Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
    // DOM load event listeners
    document.addEventListener('DOMContentLoaded', getTasks);
    // Add task events
    form.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click', removeTask);
    // Clear task event
    clearBtn.addEventListener('click', clearTasks);
    // Filter task event
    filter.addEventListener('keyup', filterTasks);
}

// Add task
function addTask(event) {
    if (taskInput.value === '') {
        alert('Add a task!');
    } else {
        createOfTaskUI(taskInput.value);
        // Store in Local Storage
        storeTaskInLocalStorage(taskInput.value);
        //Clear input 
        taskInput.value = '';
    }
    event.preventDefault();
}

// Get Tasks from Local Storage
function getTasks() {
    let tasks = checkTheLocalStorageTaskCollection();
    tasks.forEach(function (task) {
        createOfTaskUI(task);
    });
}

// Create An Element 
function createOfTaskUI(dataSource) {
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(dataSource));
    // Create new element
    const link = document.createElement('a');
    // Add href
    //link.href = "#";
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fas fa-minus-circle"></i>';
    // Append the link to li
    li.appendChild(link);
    // Append li to ul
    taskList.appendChild(li);
}

// Check the local storage
function checkTheLocalStorageTaskCollection() {
    let tasks;
    // Check if it tasks in LS
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
}

// Store Task
function storeTaskInLocalStorage(task) {
    let tasks = checkTheLocalStorageTaskCollection();
    // Add new task
    tasks.push(task);
    // Save new collection in LS
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Remove task
function removeTask(event) {
    if (event.target.parentElement.classList.contains
        ('delete-item')) {
        if (confirm('Are you sure?')) {
            event.target.parentElement.parentElement.remove();

            // Remove Task from LS
            removeTaskFromLocalStorage(event.target.parentElement.parentElement);
        }
    }
};

// Remove From LS
function removeTaskFromLocalStorage(taskItem) {
    let tasks = checkTheLocalStorageTaskCollection();
    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear Tasks
function clearTasks() {
    // My way
    // let list = document.querySelectorAll('.collection-item');
    // list.forEach(li => {
    //     li.remove();
    // });
    // One more way
    // taskList.innerHTML = '';
    // Faster way
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    // Clear From LS
    clearTasksFromLocalStorage();
};

// Clear Tasks From Local Storage
function clearTasksFromLocalStorage() {
    localStorage.clear();
}

// Filter Tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(
        function (task) {
            const item = task.firstChild.textContent;
            if (item.toLowerCase().indexOf(text) != -1) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            };
        }
    );
};