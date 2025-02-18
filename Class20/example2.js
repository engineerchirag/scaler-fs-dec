// Form Class: TodoForm
// Properties: id, title, completed, createdAt
// Methods: toggleCompleted, updateTitle(not empty, trim)


class TodoForm{
    constructor(id, title, completed){
        this.id = id || Math.random();
        this.title = title;
        this.completed = completed;
        this.createdAt = new Date();
    }

    toggleCompleted(){
        this.completed = !this.completed;
    }

    updateTitle(title) {
        const updatedTitle = title?.trim();

        if (!updatedTitle || updatedTitle.length === 0) {
            throw new Error('Title cannot be empty');
        }

        this.title = updatedTitle;
    }
}


// const todo1 = new TodoForm(1, 'Learn JS', false);
// const todo2 = new TodoForm(2, 'Learn React', false);



// Form Class: TodoList
// Properties: todos
// Methods: add(todo), remove(id), get(id)

class TodoList{
    constructor(){
        this.todos = [];
    }

    add(todo){
        this.todos.push(new TodoForm(...todo));
    }

    remove(id){
        const index = this.todos.findIndex(todo => todo.id === id);

        if (index === -1) {
            throw new Error('Todo not found');
        }

        this.todos.splice(index, 1);
    }

    get(id){
        const todo = this.todos.find(todo => todo.id === id);

        if (!todo) {
            throw new Error('Todo not found');
        }

        return todo;
    }
}

const MyTodoList = new TodoList();

MyTodoList.add([3, 'Learn Node', false]);
MyTodoList.add([4, 'Learn Express', false]);


