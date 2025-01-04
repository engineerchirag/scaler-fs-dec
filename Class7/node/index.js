const fs = require('fs');

console.log('A');

fs.readFile('f2.txt', function (err, data) {
    if (!err) {
        console.log(data.toString());
    } else {
        console.log(err);
    }
});

fs.readFile('f1.txt', function (err, data) {
    if (!err) {
        console.log(data.toString());
    } else {
        console.log(err);
    }
});

console.log('C');

