// Polyfill for forEach function

Array.prototype.myForEach = function(callback, thisArg) {
    // Null checks

    // Step1: Iterate through all elements of the array
    // Step2: Execute the callback function with each element

    let arr = thisArg || this;
    for(let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

// Consumptions
var cb = (element, index, arr) => {
    console.log(element);
};

[1,2,3,4,5].myForEach(cb); // 1,2,3,4,5
[1,2,3,4,5].myForEach(cb, [6,7,8,9,10]); // 6,7,8,9,10