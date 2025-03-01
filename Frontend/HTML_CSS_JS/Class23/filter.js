// Polyfill for myFilter function

Array.prototype.myFilter = function(callback, thisArg) {
    // Null checks

    // Step1: Iterate through all elements of the array
    // Step2: Execute the callback function with each element
    // Step3: Store the result in a new array if condition is fullfiled
    // Step4: Return the new array
    
    let arr = thisArg || this;
    let result = [];

    for(let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }

    return result;
}

// Consumptions
var cb = (element, index, arr) => {
    return element % 2 === 0;
};

[1,2,3,4,5].myFilter(cb); // [2,4]
