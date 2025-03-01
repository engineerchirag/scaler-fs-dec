let obj = {
    name: 'John',
    test: () => {
        console.log(this);
    }
}

obj.test();

let obj1 = {
    name: 'Anup',
}

let obj2 = {
    name: 'Pavan'
}

obj1.test = obj.test;
obj2.test = obj1.test;

obj2.test();


///////////////////////

let ob5j = {
    name: 'John',
    test: function() {
        const inner = () => {
            console.log(this);
        }
        inner();
    }
}

let obj6 = {
    name: 'Saransh'
}

obj6.test = obj5.test;

obj6.test();

/////////////


let obj7 = {
    name: "John",
    test: function() {
        const outer = () => {
            console.log(this.name);
        };
        outer();
    }
};

obj7.test(); 

let obj8 = {
    name: "John",
    test: function() {
        const outer = () => {
            const inner = () => {
                console.log(this.name);
            };
            inner();
        };
        outer();
    }
};

obj8.test(); 

//////////

let obj9 = {
    name: "John",
    test: function() {
        function outer() {
            const inner = () => {
                console.log(this.name);
            };
            inner();
        };
        outer();
    }
};

obj8.test(); 