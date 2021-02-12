// Document tracking completed code challenges and their prompts

// Running Sum of 1d Array - Leetcode

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// pseudocode
// create a new array to take the transformed values of the nums array
// push first idx of nums array into new array
// run a for loop with i starting at 1 to exclude the first index, and for each index create a variable that stores that value of the nums array at index i + the newArray at an index of i-1
// push that variable into the new array and repeat
// return new array

const runningSum = function(nums){
    let newArr = []
    newArr.push(nums[0])
    for(let i = 1; i < nums.length; i++){
         changedNum = nums[i] + newArr[i - 1]
        newArr.push(changedNum)
    }
    return newArr
}