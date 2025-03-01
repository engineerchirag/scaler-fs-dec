// const result = new Promise(function(resolve, reject) {
//     // Passing marks are 70%
//     const PASSING_MARKS = 70;
//     let currentMarks = 60;
//     if (currentMarks > PASSING_MARKS) {
//         resolve("Passed!");
//     } else {
//         reject("Failed!");
//     }
// });

// result
// .then((data) => {
//     console.log('Then > ', data);
// })
// .catch((err) => {
//     console.log('Catch > ', err);
// })

// isHead = Math.random() > 0.5;

const toss = new Promise(function(resolve, reject) {
    const isHead = Math.random() > 0.5;
    if (isHead) {
        resolve('Its Head');
    } else {
        reject('Its Tail');
    }
});


toss
.then((data) => {
    console.log(data)
})
.catch((error)=> {
    console.log(error);
});

