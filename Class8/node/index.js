const fs = require('fs');

// Using Callback
fs.readFile('f1.txt', function (err, data) {
    if (!err) {
        console.log(data.toString());
    } else {
        console.log(err);
    }
});


// Using Promise
const filePromise = fs.promises.readFile('f1.txt');

filePromise.then(data => {
    console.log(data.toString());
}).catch(err => {
    console.log(err);
})


