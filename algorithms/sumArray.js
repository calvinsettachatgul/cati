// non hoisting way function expression
// let sumArray = function(){
// }

// hoisting way function declaration
// function sumArray(){
// }



// function expression
let sumArray = (arr) => {
    if(arr == null){
        return 0;
    }
    let sum = 0;
    
    // for(let i=0; i < arr.length; i++){
    for(let i=0; arr.length > i; i++){
        sum += arr[i]
    }
    return sum;
}

module.exports = sumArray;