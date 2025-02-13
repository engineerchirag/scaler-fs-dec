//  call, apply, bind

var obj1 = {
    name: "Aashi",
    fullName: function(prefix){
        console.log(`${prefix} ${this.name}`);
    }
}

obj1.fullName('Ms'); // Ms Aashi

var fullname1 = obj1.fullName;
fullname1(); // window


var obj2 = {
    name: "Purva"
}

obj1.fullName.call(obj2, 'Ms'); // Ms Purva
obj1.fullName.apply(obj2, ['Ms']); // Ms Purva


var fullname2 = obj1.fullName.bind(obj2, 'Ms');
fullname2(); // Ms Purva

fullname2.call(obj1); // Ms Purva







