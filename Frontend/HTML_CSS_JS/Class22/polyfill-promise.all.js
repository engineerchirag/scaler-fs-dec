// Polyfill for Promise.all

Promise.myAll = function (promises) {
    // Code goes here

    // Scenario1: All promises should execute in parallel

    // Scenario2: All promises resolves

    // Scenario3: Any promise rejects


    // Output: Promise = list of responses | Error

    return new Promise((resolve, reject) => {
        let responses = [];
        let responseCount = 0;

        promises.forEach((promise, idx) => {
            promise.then(res => {
                // Success
                responses[idx] = res;
                responseCount++;
                if (responseCount === promises.length) {
                    resolve(responses);
                }
            }).catch(err => {
                // Failure
                reject(err);
            });
        })
    });
}