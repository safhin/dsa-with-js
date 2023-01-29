
let i = -1
function sumOfArrayFast(arr){
    i = i + 1
    if (arr.length === 0 || i >= arr.length) return 0;
    return arr[i] + sumOfArrayFast(arr)
}


function sumOfArraySlow(arr){
    if (arr.length === 0) return 0;
    let rest = arr.slice(1)
    return arr[0] + sumOfArraySlow(rest)
}


let input = new Array(9000).fill(1)

let now = Date.now();
console.log(sumOfArrayFast(input))
let finish = Date.now();
console.log(`Time need for fast function ${finish - now} ms`);



let start = Date.now();
console.log(sumOfArraySlow(input))
let end = Date.now();
console.log(`Time need for slow function ${end - start} ms`);