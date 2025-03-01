let obj1 = {
    name: 'John',
    test: function() {
        console.log(this);
    }
}

let obj2 = {
    name: 'Anup',
}


let newObjTestFn = obj1.test.bind(obj2);


// newObjTestFn.call(obj2);






