//if each element of the first array is equal to of the next arrays each element then the result will be true, false otherwise


//way 1
function sameArray(arr1,arr2){

    let trueCount = 0;

    if(arr1.length === arr2.length){
        for (let index = 0; index < arr1.length; index++) {
            for (let j = 0; j < arr2.length; j++) {
                if(arr1[index] * arr1[index] === arr2[j]){
                    arr2.splice(j,1)
                    
                }
            }
        }

        if(arr2.length <= 0){
            return true
        }else{
            return false
        }
        
    }else{
        return false;
    }
}

//way 2
function sameArray2(arr1,arr2){

    let trueCount = 0;

    if(arr1.length === arr2.length){
        for (let index = 0; index < arr1.length; index++) {
            let currentIndex = arr2.indexOf(arr1[index] ** 2);

            if(currentIndex === -1){
                return false
            }

            arr2.splice(currentIndex,1)

            return true
        }
        
    }else{
        return false;
    }
}

//way 2
function sameArray3(arr1,arr2){

    let trueCount = 0;

    if(arr1.length === arr2.length){
        for (let index = 0; index < arr1.length; index++) {
            arr1[index] = arr1[index] ** 2
        }
        
        const sorted = arr1.sort()
        const sorted2 = arr2.sort()

        if(JSON.stringify(sorted) === JSON.stringify(sorted2)){
            return true
        }else{
            return false
        }
    }else{
        return false;
    }
}

console.log(sameArray3([2,3,6,0,10],[9,4,100,36,0]))
