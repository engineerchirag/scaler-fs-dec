// Polyfill for Reduce

Array.prototype.myReduce = function(callback, initialValue) {

    // Implemenrtation goes here

    // Step1: Iterate through all elements of the array
    // Step2: Execute the callback function with each element
    // Step3: Store the result in an accumulator
    // Step4: Return the accumulator

    let arr = this;
    let acc = initialValue !== 'undefined' ? initialValue : arr[0];
    let startIndex = initialValue !== 'undefined' ? 0 : 1;
    for(let i = startIndex; i < arr.length; i++) {
        acc = callback(acc, arr[i], i, arr);
    }

    return acc;

}


// Consumptions

[1,2,3,4,5].myReduce((acc, element, index, arr) => {
    return acc + element;
},0); // 15

['a','b','c','d','e'].myReduce((acc, element, index, arr) => {
    return acc + element;
}); // abcde