// Named function
function sum(a, b, c) {
    let total = a + b + c;
    return total;
}

console.log(sum(1, 2, 3, 4));

// Anonymous Function
const sum1 = function(a, b, c) {
    let total = a + b + c;
    return total;
}

console.log(sum1(1, 2, 3, 4));

// Arrow function

const sum2 = (a, b, c) => {
    let total = a + b + c;
    return total;
}