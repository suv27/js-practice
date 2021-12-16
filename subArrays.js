/* 
input  = [[4,3,2], [5,4,8]];
output = (2 + 4) = 6
input  = [[5,4,2], [9,8,7], [7,3,1]]
output = (2 + 7 + 1) = 10
input  = [[8,7,3], [2,4,6], [5,7,3], [0,1,3]]
output = (3 + 2 + 3 + 0) = 8
*/

const subArr = (arr) => {
    let result = 0;
    arr.forEach((innerArr, index) => innerArr.sort());
    for (let array of arr) result += array[0];
    return result;
}

let input = subArr([[4,3,2], [5,4,8]]);
console.log(input);
input = subArr([[5,4,2], [9,8,7], [7,3,1]]);
console.log(input);
input = subArr([[8,7,3], [2,4,6], [5,7,3], [0,1,3]]);
console.log(input);