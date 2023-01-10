
function logarithmsN(num){
    while(num > 1){
        console.log(num);
        num /= 2
    }
    console.log('Done');
}


function logarithmRecursion(num){
    if (num <= 1) {
        console.log("Done");
        return;
    }
    console.log(num)
    logarithmRecursion(num / 2)
}

logarithmRecursion(16);