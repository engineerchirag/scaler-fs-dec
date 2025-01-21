const tasks = [{
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

const newTask = {
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

// createTask
function createTask(id, priority, content) {
    const newTaskRef = document.createElement('div');
    newTaskRef.classList.add('task');
    newTaskRef.innerHTML = `
        <div class="task-priority">${priority}</div>
        <div class="task-id">${id}</div>
        <div class="task-content">
            ${content}
        </div>
    `;
    taskContainerRef.appendChild(newTaskRef);
}

function renderList() {
    tasks.forEach(task => {
        createTask(task.id, task.priority, task.content);
    });
}

addButtonRef.addEventListener('click', function() {
    taskModal.classList.remove('hide');
});

closeButtonRef.addEventListener('click', function() {
    taskModal.classList.add('hide');
});

modalPriortiesRef.forEach(priorityRef => {
    priorityRef.addEventListener('click', function(e) {
        modalPriortiesRef.forEach(ref => {
            ref.classList.remove('selected');
        })
        e.target.classList.add('selected');
        newTask.priority = e.target.getAttribute('data-priority');
        console.log(newTask);
    });
});

textAreaRef.addEventListener('keyup', function(e) {
    newTask.content = e.target.value;
    console.log(newTask);
})



renderList();