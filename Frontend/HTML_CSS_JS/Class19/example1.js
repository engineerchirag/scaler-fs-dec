// Constructor Function
function Car(model, color, price, tax) {
    this.model = model;
    this.color = color;
    this.price = price;
    this.tax = tax;
}  

Car.prototype.finalPrice = function() {
    return this.price + this.tax;
}


const Car1 = new Car('Toyota', 'Red', 10000, 200);
const Car2 = new Car('Kia', 'Blue', 10000, 200);

// Class Syntax

class Car {
    constructor(model, color, price, tax) {
        this.model = model;
        this.color = color;
        this.price = price;
        this.tax = tax;
        this.totalPrice = function() {
            return this.price + this.tax;
        }
    }

    finalPrice() {
        return this.price + this.tax;
    }
}

const Car3 = new Car('Toyota', 'Red', 10000, 200);
const Car4 = new Car('Kia', 'Blue', 10000, 200);



// Create a class called task with required properties


// {
//     id: 1,
//     priority: 2,
//     content: 'Task 1'
// }

class Task {
    constructor(id, priority, content) {
        this.id = id;
        this.priority = priority;
        this.content = content;
    }
}

const task1 = new Task(1, 2, 'Task 1');
const task2 = new Task(2, 4, 'Task 2');