// from codewars

// Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval 
//lengths. Overlapping intervals should only be counted once.

// Intervals
// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// Overlapping Intervals
// List containing overlapping intervals:

// [
//   [1,4], // 
//   [7, 10], => 3
//   [3, 5] // [1, 5] =>4
// ]
// The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

// Examples:
// sumIntervals( [
//   [1,2], => 1
//   [6, 10], =>4
//   [11, 15] => 4
// ] ); // => 9

// sumIntervals( [
//   [1,4],
//   [7, 10],
//   [3, 5]
// ] ); // => 7


// sumIntervals( [
//   [1,5],
//   [10, 20],
//   [1, 6],
//   [16, 19],
//   [5, 11]
// ] ); // => 19

// overlapping last number of the previous interval is greater than the first number of the next interval
let sumIntervals = (intervArr) => {
    let sum = 0;
    
    if(intervArr === null || intervArr.length === 0){
        return sum;
    }
    
    let intervalSet = new Set();
    
    intervArr.forEach((interval) => {
        // console.log(interval[0]);
        // console.log(interval[1]);
        for(let i = interval[0]; i <= interval[1]; i++){
            intervalSet.add(i);
        }
    });
    

    
    // let prev_last = intervArr[0][1]
    
    // for(let i = 0; i < intervArr.length; i++){
        
    //     // the last number of the previous interval is within the range of the next interval
    //     if(prev_last > intervArr[i][0] && prev_last < intervArr[i][1]){
    //         intervArr[i][0] = prev_last;
    //     }
        
    //     sum += (intervArr[i][1] - intervArr[i][0])
    //     prev_last = intervArr[i][1];
    // }
    
// [1, 4], [3, 5]
/*
    prev_last intervArr[i][0] intervArr[i][1]
0      4            1               4             => 3
1      4             3              5 .  intervArr[1][0] = 4 => 1
*/
    // return [...intervalSet].sort(); 
    let myArr = Array.from(intervalSet);
    myArr = myArr.sort((a, b) => a - b );
    let tempArr = [];
    for(let i = 0; i < myArr.length; i++){
              //3
        tempArr.push(myArr[i]);
        if(myArr[i+1] !== myArr[i] + 1){
            // push a collection of numbers to intervalCollection
            sum += tempArr[tempArr.length - 1] - tempArr[0];
            // console.log(tempArr, 'in the for loop');
            tempArr = [];
        }
        
    }
    return sum;
    
}

//[[1,2,3],[700,701]]
console.log(sumIntervals([[1, 4], [7, 10], [3, 5]]));
module.exports = sumIntervals;