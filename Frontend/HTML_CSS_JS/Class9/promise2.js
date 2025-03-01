function createDummyPromise(delay, message) {
    return new Promise(function (resolve, reject) {
        const TIMEOUT = 5000;
        const maxDelay = Math.min(delay, TIMEOUT);
        setTimeout(() => {
            if (delay > TIMEOUT) {
                reject(`Max delay can be 5000ms, current delay:  ${message}`);
            } else {
                resolve(message);
            }
        }, maxDelay);
    });
}


// ES5
// createDummyPromise(20000, '20sec').then((data) => console.log(data)).catch(err => console.log(err));
// createDummyPromise(3000, '3sec').then((data) => console.log(data)).catch(err => console.log(err));;
// createDummyPromise(4000, '4sec').then((data) => console.log(data)).catch(err => console.log(err));;
// createDummyPromise(1000, '1sec').then((data) => console.log(data)).catch(err => console.log(err));;

// ES6
// async function callPromises() {
//     try {
//         const r1 = await createDummyPromise(20000, '20sec');
//         console.log(r1);
//     }catch(e) {
//         console.log(e);
//     }

//     try {
//         const r2 = await createDummyPromise(3000, '3sec');
//         console.log(r2);
//     }catch(e) {
//         console.log(e);
//     }

//     try{
//         const r3 = await createDummyPromise(4000, '4sec');
//         console.log(r3);
//     }catch(e) {
//         console.log(e);
//     }
    
    
//     try {
//         const r4 = await createDummyPromise(1000, '1sec');
//         console.log(r4);
//     }catch(e) {
//         console.log(e);
//     }
// }

// callPromises();

//////////////////////////////////////


async function callPromisesInParallel() {
    try {
        const result = await Promise.all([
            createDummyPromise(3000, '3sec'),
            createDummyPromise(4000, '4sec'),
            createDummyPromise(20000, '20sec'), 
            createDummyPromise(1000, '1sec'),
        ]);
        console.log(result);
    } catch(e) {
        console.log(e);
    }
}
// callPromisesInParallel();

async function callPromisesInParallelUsingAllSettled() {
    const result = await Promise.allSettled([
        createDummyPromise(3000, '3sec'),
        createDummyPromise(4000, '4sec'),
        createDummyPromise(20000, '20sec'), 
        createDummyPromise(1000, '1sec'),
    ]);
    console.log(result);
}

callPromisesInParallelUsingAllSettled();


