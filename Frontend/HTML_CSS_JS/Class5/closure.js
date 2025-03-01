// function sum(x) {
//     let inner = function (y) {
//         return x + y;
//     }
//     return inner;
// }

// const sum1 = sum(1);
// // console.log(typeof sum1);
// console.log(sum1(5));
// console.log(sum1(6));
// console.log(sum1(7));

// const sum2 = sum(2);
// // console.log(typeof sum1);
// console.log(sum2(5));
// console.log(sum2(6));
// console.log(sum2(7));






// const counter = function() {
//     let count = 0;
//     return function() {
//         return ++count;
//     }
// }

// const myCounter = counter();
// console.log(myCounter());
// console.log(myCounter());
// console.log(myCounter());
// console.log(myCounter());
// console.log(myCounter());
// console.log(myCounter());
// console.log(myCounter());


// Create a sum memorize function

function sum() {
    // code goes here
    let result = {
        // '1,2': 3,
        // '2,2': 4
    };
    return function(arr) {
        // console.log(JSON.stringify(result));
        let key = String(arr);
        if (result[key]) {
            console.log('Memory');
            return result[key];
        }
        const total = arr[0] + arr[1];
        result[key] = total;
        console.log('Compute');
        return result[key];
    }
}

const memorizedSum = sum();

memorizedSum([1, 2]); // Compute > 3
memorizedSum([1, 2]) // Memory > 3

memorizedSum([2, 2]) // Compute > 4
memorizedSum([3, 2]) // Compute > 5

memorizedSum([1, 2]) // Memory > 3
memorizedSum([2, 2]) // Memory > 4
memorizedSum([3, 2]) // Memory > 5


