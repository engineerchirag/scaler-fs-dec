const transactions = [
    { customerId: 1, amount: 100, date: '2024-03-01' },
    { customerId: 2, amount: 150, date: '2024-03-01' },
    { customerId: 1, amount: 200, date: '2024-03-02' },
    { customerId: 3, amount: 50, date: '2024-03-02' },
    { customerId: 2, amount: 120, date: '2024-03-03' }
  ];

  // Question1: totalTransactionsCount

  function totalTransactionsCount() {
    return transactions.length;
  }

  // Question2: totalTransactionsAmount

  function totalTransactionsAmount() {
    return transactions.reduce((acc, item) => {
        return acc + item.amount;
    }, 0);
  }

  // Question3: transactionsByDate

  function transactionsByDate(date) {
    return transactions.filter((items) => {
        return item.date === date;
    })
  }

  // Question4: firstTransactionOfCustomer

  function firstTransactionOfCustomer(customerId) {
    return transactions.find((item) => {
        return item.customerId === customerId;
    })
  }

  // Question5: groupTransationByDate

//   {
//     '2024-03-01': [
//         { customerId: 1, amount: 100, date: '2024-03-01' },
//         { customerId: 2, amount: 150, date: '2024-03-01' },
//     ],
//     '2024-03-02': [
//         { customerId: 1, amount: 200, date: '2024-03-02' },
//         { customerId: 3, amount: 50, date: '2024-03-02' },],
//     '2024-03-03': [
//         { customerId: 2, amount: 120, date: '2024-03-03' }
//     ]
//   }
  function groupTransationByDate() {
    return transactions.reduce((acc, item) => {
        if (acc[item.date]) {
            acc[item.date].push(item)
        } else {
            acc[item.date] = [item];
        }
        return acc;
    }, {});
  }