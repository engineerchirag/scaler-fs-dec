function createDummyPromise(delay, message) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });   
}


// 1. I will go to gym (2000ms)
// 2. I will take bath after that (1000ms)
// 3. I will take breakfast after that (3000ms)

// console.log('A');
// createDummyPromise(2000, 'Gym').then(data => console.log('B'));
// console.log('C');

createDummyPromise(2000, 'Gym')
    .then(data => {
        console.log(data);
        return createDummyPromise(1000, 'Bath');
    })
    .then((data) => {
        console.log(data);
        return createDummyPromise(3000, 'Breakfast');
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

    // Show details of name of all students

    // API1: List of all students ID
    // API2: Names for given IDS







