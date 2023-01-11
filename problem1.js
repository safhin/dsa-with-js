//find heights and lowes temp and find if there is anything else number

let temparature = [10,12,5,"hi",7.5,13,15,16];

function findHeightAndLowestTemp(arr){
    let err , heights = 0, lowest = 0;
    for (let index = 0; index < arr.length; index++) {
        if(typeof arr[index] !== "number"){
            err = arr[index]
        }else if(arr[index] > heights){
            heights = arr[index]
        }else if(arr[index] < heights){
            lowest = arr[index]
        }
    }

    return {err,heights,lowest};
}


console.log(findHeightAndLowestTemp(temparature));;

