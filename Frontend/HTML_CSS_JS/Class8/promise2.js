function createDummyPromise(delay, message) {
    return new Promise(function(resolve, reject) {
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

createDummyPromise(20000, '20sec').then((data) => console.log(data)).catch(err => console.log(err));

createDummyPromise(3000, '3sec').then((data) => console.log(data)).catch(err => console.log(err));;

createDummyPromise(4000, '4sec').then((data) => console.log(data)).catch(err => console.log(err));;

createDummyPromise(1000, '1sec').then((data) => console.log(data)).catch(err => console.log(err));;