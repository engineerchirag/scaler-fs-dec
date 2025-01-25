const tasks = JSON.parse(localStorage.getItem('tasks')) || [{
    id: 1,
    priority: 2,
    content: 'Task 1'
}, {
    id: 2,
    priority: 4,
    content: 'Task 2'
},
{
    id: 3,
    priority: 2,
    content: 'Task 3'
},
{
    id: 4,
    priority: 1,
    content: 'Task 4'
},
{
    id: 5,
    priority: 4,
    content: 'Task 5'
},
{
    id: 6,
    priority: 1,
    content: 'Task 6'
},
{
    id: 7,
    priority: 2,
    content: 'Task 7'
},
{
    id: 8,
    priority: 3,
    content: 'Task 8'
}];


function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


let newTask = {
    id: '',
    priority: '',
    content: ''
};

// References
const taskContainerRef = document.querySelector('.task-container');
const addButtonRef = document.querySelector('.header .create-icon');
const taskModal = document.querySelector('.task-modal');
const closeButtonRef = document.querySelector('.task-modal .close');
const modalPriortiesRef = document.querySelectorAll('.right-section .priority');
const textAreaRef = document.querySelector('.task-modal textarea');
const priotiyFilterBoxesRef = document.querySelectorAll('.filters .box');
const readOnlyBtnRef = document.querySelector('.header .actions .btn-icon.readonly-icon')

function removeTask(id) {
    const indexToRemove = tasks.findIndex(task => task.id == id);
    if (indexToRemove !== -1) {
        tasks.splice(indexToRemove , 1);
    }
    updateLocalStorage();
}

function updateTask(id, newValue) {
    const indexToRemove = tasks.findIndex(task => task.id == id);
    if (indexToRemove !== -1) {
        const currentTask = tasks[indexToRemove];
        currentTask.content = newValue;
        tasks.splice(indexToRemove , 1, currentTask);
    }
    updateLocalStorage();
}

// createTask
function createTask(id, priority, content) {
    const newTaskRef = document.createElement('div');
    newTaskRef.classList.add('task');
    newTaskRef.innerHTML = `
        <div class="task-priority priority p${priority}"></div>
        <div class="task-id">${id}</div>
        <div class="task-content">
            <textarea>${content}</textarea>
        </div>
        <div class="task-delete-icon"><i class="fa-solid fa-trash"></i></div>
    `;
    newTaskRef.setAttribute('data-id', id);
    newTaskRef.setAttribute('data-priority', priority);
    taskContainerRef.appendChild(newTaskRef);
    
    newTaskRef.querySelector('.task-delete-icon').addEventListener('click', function(e) {
        const taskRef = e.target.closest('.task');
        removeTask(taskRef.getAttribute('data-id'));
        renderList();
    });
    newTaskRef.querySelector('.task-content textarea').addEventListener('change', function(e) {
        const newValue = e.target.value;
        updateTask(id, newValue);
    });
    updateLocalStorage();
}

function renderList() {
    taskContainerRef.innerHTML = '';
    tasks.forEach(task => {
        createTask(task.id, task.priority, task.content);
    });

}

function closeModal() {
    taskModal.classList.add('hide');
}

function openModal() {
    taskModal.classList.remove('hide');
    newTask.id = Math.random();
}

addButtonRef.addEventListener('click', function() {
    openModal()
});

closeButtonRef.addEventListener('click', function() {
    closeModal();
});

modalPriortiesRef.forEach(priorityRef => {
    priorityRef.addEventListener('click', function(e) {
        modalPriortiesRef.forEach(ref => {
            ref.classList.remove('selected');
        })
        e.target.classList.add('selected');
        newTask.priority = e.target.getAttribute('data-priority');
    });
});

textAreaRef.addEventListener('keyup', function(e) {
    if (e.key == "Enter") {
        tasks.push(newTask);
        newTask = {};
        closeModal();
        renderList();
    } else {
        newTask.content = e.target.value;
    }
});

function applyFilter(priority) {
    const allTasksRef = document.querySelectorAll('.task-container .task');
    allTasksRef.forEach(taskRef => {
        const taskPriority = taskRef.getAttribute('data-priority');
        if (taskPriority === priority || priority === '0') {
            taskRef.classList.remove('hide');
        } else {
            taskRef.classList.add('hide');
        }
    })
}

priotiyFilterBoxesRef.forEach(boxRef => {
    boxRef.addEventListener('click', function(e) {
        applyFilter(e.target.getAttribute('data-priority'));
    });
});

readOnlyBtnRef.addEventListener('click', function(e) {
    const readOnlyBtnClassList = readOnlyBtnRef.classList;
    if (readOnlyBtnClassList.contains('selected')) {
        readOnlyBtnClassList.remove('selected');
        taskContainerRef.classList.remove('noneditable');
    } else {
        readOnlyBtnClassList.add('selected');
        taskContainerRef.classList.add('noneditable');
    }
})

renderList();



