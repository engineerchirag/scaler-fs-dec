// Impure function
// function sum(arr) {
//     arr[0] = 0;
//     let total = 0;
//     for(let i=0; i < arr.length; i++) {
//         total += arr[i];
//     }
//     return total;
// }

// let newArr = [1,2,3,4];

// console.log(sum(newArr)); // A
// console.log(newArr); // B

// Pure functions
function sum1() {
    let arr = arguments;
    console.log(arr);
    arr[0] = 0;
    let total = 0;
    for(let i=0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

let i = 1; let j = 2; let k = 3; let l = 4;
console.log(sum1(i, j, k, l)); // A
console.log(i, j, k, l); // B



// Example 3
let newArr1 = [1,2,3,4];

function sum3() {
    newArr1[0] = 0;
    let total = 0;
    for(let i=0; i < newArr1.length; i++) {
        total += newArr1[i];
    }
    return total;
}

console.log(sum3()); // A
console.log(newArr1); // B

newArr1[2] = 5;
console.log(sum3()); // A

newArr1[1] = 3;
console.log(sum3()); // A

// Example 4:

var c = 0;

function sum3(a, b) {
    return a + b + c++;
}

console.log(sum(1,2));
console.log(sum(1,2));