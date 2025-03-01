// Polyfill for myMap function

Array.prototype.myMap = function(callback, thisArg) {
    // Null checks

    // Step1: Iterate through all elements of the array
    // Step2: Execute the callback function with each element
    // Step3: Store the result in a new array
    // Step4: Return the new array

    let arr = thisArg || this;
    let result = [];

    for(let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }

    return result;
    
}

// Consumptions
var cb = (element, index, arr) => {
    return 2 * element;
};

[1,2,3,4,5].myMap(cb); // [2,4,6,8,10]
