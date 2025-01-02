// We are given an array, which has the radius of different 
// circles, we need to find the area, circumference for all the radiuses.

let myRadiusArray = [2, 3, 4, 5, 8]


function calculateArea() {
    let areaArr = [];
    for (let i = 0; i < myRadiusArray.length; i++) {
        areaArr.push(3.14 * myRadiusArray[i] * myRadiusArray[i]);
    }

    return areaArr;
}

function calculateCircumference() {
    let cirArr = [];
    for (let i = 0; i < myRadiusArray.length; i++) {
        cirArr.push(2 * 3.14 * myRadiusArray[i]);
    }

    return cirArr;
}


// Output:
// This is area array =>  
    // [ 12.56, 28.259999999999998, 50.24, 78.5, 200.96 ]
// This is Circumference array => 
//     [
//   12.566370614359172,
//   18.84955592153876,
//   25.132741228718345,
//   31.41592653589793,
//   50.26548245743669
// ]