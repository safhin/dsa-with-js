//probolem find even,odd number but the input will be height 100

let i = 0, n = 11, numArr = [];

for (let i = 0; i < 101; i++) {
    numArr[i] = 0
}  

for (let i = 0; i < 101; i+= 2) {
    numArr[i] = 1
}


if(numArr[n]){
    console.log(`${n} is even number`)
}else{
    console.log(`${n} is odd number`)
}