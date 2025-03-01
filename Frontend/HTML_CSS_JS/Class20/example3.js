// Object literal

var obj = {};

// Function constructor

function Person(name, age) {
    this.name = name;
}

new Person('John', 30);

// Class

class Car {
    constructor(model, color) {
        this.model = model;
        this.color = color;
    }
}

new Car('Toyota', 'Red');

// Object.create

var obj = Object.create({a: 1});

