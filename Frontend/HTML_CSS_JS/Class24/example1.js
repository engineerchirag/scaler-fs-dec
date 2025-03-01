// Shallow copy

var a  = {x: 1, y: 2, z: {l: 10, m: 20}};

var d = a; // Pass byb reference

var b = Object.assign({}, a); // Create copy ES5
var c = {...a}; // Create copy ES6  {x: 1, y: 2, z: {l: 10, m: 20}}

c.x = 20;
console.log(a.x) // A??

c.z.l = 100; 
console.log(a.z.l) // B??