//example of our code

function doSum(nums){
    let total = 0;
    while (nums > 0) {
        nums--;
        total += nums;
    }
    return total;
}


function doSumWithMathRules(nums){
    return nums * (nums - 1) / 2;
}

let time = performance.now();
console.log(doSumWithMathRules(1000));
let time2 = performance.now();

console.log(`Time for complete task ${(time - time2) / 1000}`)