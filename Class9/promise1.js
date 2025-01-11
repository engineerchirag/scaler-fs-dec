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

function doFlipES5() {
    console.log('A');

    toss
        .then((result) => {
            console.log(result)
        })
        .catch((error)=> {
            console.log(error);
        });

    console.log('B');
}

async function doFlipES6() {
    console.log('A');
    try {
        const result = await toss;
        console.log(result);
    } catch(e) {
        console.log(e);
    }
    console.log('B');
}

doFlipES6();



