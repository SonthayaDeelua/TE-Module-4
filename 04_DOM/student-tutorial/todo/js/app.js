const todoList = document.getElementById('todos');

let todos = [];
let pageTitle = '';

function init(){
    pageTitle = 'My Morning Routine';
    todos = [
        { id: 1, task: 'WakeUp', completed: false },
        { id: 2, task: 'Brush Teeth', completed: false },
        { id: 3, task: 'Shower', completed: false },
        { id: 4, task: 'Get Dressed', completed: false },
        { id: 5, task: 'Drive to work', completed: false },
        { id: 6, task: 'Work', completed: false },
        { id: 7, task: 'Drive home from work', completed: false },
        { id: 8, task: 'Dinner', completed: false },
        { id: 9, task: 'Brush Teeth', completed: false },
        { id: 10, task: 'Go to bed', completed: false }
    ]
}

function addPageTitle() {
    const addPage = document.createElement('h1');
    addPage.innerText = pageTitle;
    todoList.appendChild(addPage);
}

function addTodos() {
    const putInUl = document.createElement('ul');
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.innerText = todo.task;
        putInUl.appendChild(li);
    })
    todoList.appendChild(putInUl);
}

init();
addPageTitle();
addTodos();