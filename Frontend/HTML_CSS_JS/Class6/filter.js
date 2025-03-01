const transactions = [800, 3000, 4000, 2000, - 898, 3800, - 4500];

const positiveTransactions = (txns) => {
    
    // Iterate through all items
    // Return a new array 
    // Return Subarray
    return txns.filter(item => {
        return item > 0;
    });
}

console.log(positiveTransactions(transactions));

// [800, 3000, 4000, 2000, 3800]
