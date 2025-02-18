// Polyfill for Promise.allSettled

Promise.myAllSettled = function (promises) {
    // Implementation goes here

    // Always be resolved
    // List of responses


    return new Promise((resolve, reject) => {
        let responses = [];
        let responseCount = 0;

        promises.forEach((promise, idx) => {
            promise.then(res => {
                // Success
                responses[idx] = { status: 'fulfilled', value: res };
                responseCount++;
                if (responseCount === promises.length) {
                    resolve(responses);
                }
            }).catch(err => {
                // Failure
                responses[idx] = { status: 'rejected', reason: err };
                responseCount++;
                if (responseCount === promises.length) {
                    resolve(responses);
                }
            });
        })
    });
}

// Polyfill for Promise.any

Promise.myAny = function (promises) {
    // Implementation goes here

    // Resolve first promise
    // Reject if all promises are rejected

    return new Promise((resolve, reject) => {
        let failureCount = 0;

        promises.forEach((promise, idx) => {
            promise.then(res => {
                resolve(res);
            }).catch(err => {
                // Failure
                failureCount++;
                if (failureCount === promises.length) {
                    reject(err);
                }
            });
        })
    });
}


// Polyfill for Promise.race

Promise.myRace = function (promises) {
    // First response

    return new Promise((resolve, reject) => {
        promises.forEach((promise) => {
            promise.then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        })
    })
}