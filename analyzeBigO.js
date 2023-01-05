function findUniqueNums(nums) {
    let uniqueNums = [];
    for (let index = 0; index < nums.length; index++) {
        if(!uniqueNums.includes(nums[index])){
            uniqueNums.push(nums[index])
        }
    }

    return uniqueNums;
}

console.log(findUniqueNums([1,2,4,5,5,2,3,1]))