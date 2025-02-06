"use strict";

console.log(this);

function test() {
    console.log(this);
}

test();

let obj = {
    name: 'John',
    test: function() {
        console.log(this);
    }
}

obj.test();

let newObjTestFn = obj.test;

newObjTestFn();

let obj1 = {
    name: 'Anup',
}

let obj2 = {
    name: 'Pavan'
}

obj1.test = obj.test;
obj2.test = obj1.test1;

obj2.test();
