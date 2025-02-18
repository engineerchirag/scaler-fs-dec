// Polyfill

Array.prototype.myMap = function(callback) {
    // Implementation goes here
    console.log(this); // arr
};

const arr = [1, 2, 3, 4, 5];

arr.myMap();

// Polyfill for myCall

Function.prototype.myCall = function(context, ...args) {
    console.log(this); // greet
    context.fn = this;
    context.fn(...args);
}

function greet(a,b) {}

greet.myCall({}, 1, 2);

Function.prototype.myApply = function(context, ...args) {
    console.log(this); // greet
    context.fn = this;
    context.fn(args);
}

greet.myApply({}, [1, 2]);


Function.prototype.myBind = function(context, ...args) {
    // Return a new function
    // return function executed with context
    // Closure to remember the context
    const selfFn = this;
    return function() {
        return selfFn.apply(context, args);
    }
}
