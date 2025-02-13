
// Question 1:
const obj = {
    value: 42,
    printValue: function () {
      function inner() {
        console.log(this);
      }
      inner.call(this);// A
      inner();// B
    }
  };
  
  obj.printValue();

  // Question 2:

  const obj = {
    value: 50,
    getValue: function () {
      return function () {
        console.log(this.value);
      };
    }
  };
  
  const fn = obj.getValue();
  fn.call(obj);


// Question 3:

const obj2 = {
    value: 100
}

const obj = {
    value: 99,
    printValue: function () {
        // this = 
        const inner = function () {
            console.log(this);
        };

        const bindedInner = inner.bind(this);
    
        setTimeout(bindedInner, 1000);
    }
};

obj.printValue();
obj.printValue.call(obj2);