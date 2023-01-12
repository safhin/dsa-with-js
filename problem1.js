//find heights and lowes temp and find if there is anything else number

let temparature = [-2,4,45,23,-4,"error",-6,-8,34,43];

let err , heights = 0, lowest = 0;
function findHeightAndLowestTemp(arr){
    for (let index = 0; index < arr.length; index++) {
        if(heights < arr[index]){
            heights = arr[index]
        }else if(lowest > arr[index]){
            lowest = arr[index]
        }
    }

    return {err,heights,lowest};
}


console.log(findHeightAndLowestTemp(temparature));;

