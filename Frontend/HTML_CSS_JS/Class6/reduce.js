const transactions = [800, 3000, 4000, 2000, - 898, 3800, - 4500];

const totalTransactionValue = (tnxs) => {
    // let acc = 0;
    // tnxs.forEach(item => {
    //     acc += item;
    // });
    // return acc;

    return tnxs.reduce((acc, item , i) => {
        acc += item;
        return acc;
    }, 0);
}

console.log(totalTransactionValue(transactions));

// forEach((item, i) => {})
// map((item, i) => {})
// filter((item, i) => {})