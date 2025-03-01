// let arr = [1,2,3,4];

// // for(...) { ... }

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i], i);
// }

// // forEach

// arr.forEach(function (item, i) {
//     console.log(item, i);
// });

// let myRadiusArray = [2, 3, 4, 5, 8]


// function calculateArea() {
//     let areaArr = [];
//     myRadiusArray.forEach(function (r, i){
//         areaArr.push(3.14 * r * r);
//     }) 
//     return areaArr;
// }

// function calculateCircumference() {
//     let cirArr = [];
//     myRadiusArray.forEach(function (r, i){
//         cirArr.push(2 * 3.14 * r);
//     });
//     return cirArr;
// }

// let arr = [1,2,3,4];

// // for(...) { ... }

// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     newArr.push(2* arr[i]);
// }

// console.log(newArr);

// // // forEach

// let newArr1 = [];
// arr.forEach(function (item, i) {
//     newArr1.push(2*item);
// });
// // Iterate through all items

// console.log(newArr1);


// const newArr2 = arr.map(function(item, i) {
//     return item * 2;
// });
// console.log(newArr2);

// Iterate through all items
// Return a new array of same length

// Output: [2,4,6,8]


let myRadiusArray = [2, 3, 4, 5, 8]

const calculateArea = () => myRadiusArray.map((r, i) => 3.14 * r * r);
const calculateCircumference = () => myRadiusArray.map((r, i) => 2 * 3.14 * r);