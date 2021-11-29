const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
//Results for the tinyArray
//insert 34.1 μs
//append 81.8 μs

const smallArray = getSizedArray(100);
//Results for the smallArray
//insert 47.9 μs
//append 94.4 μs

const mediumArray = getSizedArray(1000);
//Results for the mediumArray
//insert 178.3 μs
//append 135.9 μs

const largeArray = getSizedArray(10000);
//Results for the largeArray
//insert 8.1133 ms
//append 559.2 μs

const extraLargeArray = getSizedArray(100000);
//Results for the extraLargeArray
//insert 995.8275 ms
//append 3.4874 ms


// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(largeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(largeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

// For the tiny and small array, the insert method is faster; I assume that the process of shifting the position of each index is faster than
// the process of appending to the end of an array at smaller array lengths. The append method seems to scale better since it is faster with larger array sizes. 
// The difference in speed at lower array sizes is not significant enough to warrant using unshift when looking to scale.