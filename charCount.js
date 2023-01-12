 
 function charCount(str){
    let charList = {}

    for (let index = 0; index < str.length; index++) {
        const char = str[index].toLowerCase()
        
        if(charList[char] > 0){
            charList[char]++
        }else{
            charList[char] = 1
        }
    }

    return charList;
 }

console.log( charCount('Good morning'));