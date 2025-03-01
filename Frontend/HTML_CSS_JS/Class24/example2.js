// Deep Copy

var a  = {x: 1, y: 2, z: {l: 10, m: 20}};


var c = JSON.parse(JSON.stringify(a));// deepclone of a

c.x = 20;
console.log(a.x) // A?? 1

c.z.l = 100; 
console.log(a.z.l) // B?? 10


// Own Deep Clone Function

function deepClone(obj) {
    // Implementation goes here
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map((item) => deepClone(item));
    } else if(obj instanceof Function) {
        return obj.bind({});
    } else {
        let copyObj = {};
        for(let key in obj) {
            copyObj[key] = deepClone(obj[key]);
        }
        return copyObj;
    }    
}

console.log(deepClone({x: 1, y: 2, z: {l: 10, m: 20}, k: [1,2,{i: 1}], j: function() {}})); // {x: 1, y: 2, z: {l: 10, m: 20}}