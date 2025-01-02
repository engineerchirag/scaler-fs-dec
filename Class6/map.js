const transactions = [800, 3000, 4000, 2000, - 898, 3800, - 4500];
const inrtToUsd = 80;

const conversionToDollars = () => {
    return transactions.map((item, i) => item / inrtToUsd);
}

console.log(conversionToDollars());

// Ouput: [10, ...];


