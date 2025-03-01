// global();
// function global() {
//     var g = 'global';
//     console.log(g);
//     function outer() {
//         var o = 'outer';
//         console.log(g, o);
//         function inner () {
//             var i = 'inner';
//             console.log(g, o, i);
//         }
//         inner();
//     }
//     outer();
// }


// // Eg: 2
// function isHoliday(date) {
//     var holidays = ['25/12/25'];
//     if (holidays.includes(date)) {
//         return 'Yes'
//     } 
//     return 'No';
// }

// // Eg: 3
// function isHoliday(date) {
//     var holidays = ['25/12/25'];
//     var result = '';
//     if (holidays.includes(date)) {
//         var logData = 'Yes, it a holiday';
//         result = 'Yes';
//     } else {
//         result = 'No';
//     }
//     return result;
// }

// // Eg: 4
// function isHoliday(date) {
//     var logData;
//     var holidays;
//     var result;
//     holidays = ['25/12/25'];
//     result = '';
//     if (holidays.includes(date)) {
//         logData = 'Yes, it a holiday';
//         result = 'Yes';
//     } else {
//         result = 'No';
//     }
//     console.log(holidays, result, logData); //
//     return result;
// }


// Eg: 5
// function isHoliday(date) {
//     let holidays = ['25/12/25'];
//     let result = '';
//     if (holidays.includes(date)) {
//         let logData = 'Yes, it a holiday';
//         result = 'Yes';
//     } else {
//         result = 'No';
//     }

//     console.log(holidays, result, logData);
//     return result;
// }
// console.log(isHoliday('25/12/25'))


// Eg: 6

function isHoliday(date) {
    console.log(logData);
    let holidays = ['25/12/25'];
    let result = '';
    if (holidays.includes(date)) {
        let logData = 'Yes, it a holiday';
        result = 'Yes';
    } else {
        result = 'No';
    }
    return result;
}
console.log(isHoliday('25/12/25'))