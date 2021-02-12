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


// Sum of All Odd Length Subarrays - Leetcode

// Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.
// A subarray is a contiguous subsequence of the array.
// Return the sum of all odd-length subarrays of arr

// pseudocode

// create new array to hold values in odd length subarrays
// create variable to hold the count of those values added to the new array that meet those conditions
// create a nested for loop, where j = i, so that for each index in the first loop, it loops through all other values and pushes them into the new array, checking after each value has been pushed, if the length of that newly appended array is even, and if it isn't, for each element in that array, ad the value of that element to the count
// outside of the innner loop but inside the first loop, reset the new arrays length to zero to start the evaluation of subarrays starting at a new value at index of i in the array.
// return the count 

const sumOddLengthSubarrays = function(arr) {
    let newArr = []
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        for(let j = i; j < arr.length; j++){ 
            newArr.push(arr[j])
            if(newArr.length % 2 !== 0){
                newArr.forEach(el=> {
                    sum += el
                })
            }
        } newArr.length = 0
    } return sum
};

// Richest Customer Wealth - Leetcode

// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

// pseudocode
// create a variable to hold the currently found richest person
// create a nest for loop, where the first loop iterates through the length of accounts array, and the second iterates through the nested array at the index of i
// then store the results of a reduce method implemented on that nested array, and if that result is greater than the current richest person stored in our variable, reassign that variable to the latest sum
// return the sum

var maximumWealth = function(accounts) {
    let biggestCashCow = 0
    for(let i = 0; i < accounts.length; i++){
          let result = 0
        for(let j = 0; j < accounts[i].length; j++){
            result = accounts[i].reduce((total, num)=>{
                return total + num
            })
           if(result > biggestCashCow){
               biggestCashCow = result
           }
        }
    }
    return biggestCashCow
};


// Number of Good Pairs - Leetcode

// Given an array of integers nums.
// A pair (i,j) is called good if nums[i] == nums[j] and i < j.
// Return the number of good pairs.

// pseudocode
// set a variable to hold the total number of good pairs
// create a nested for loop, where the first loop start at 0 and the the second loop starts at 1
// if arr[i] == arr[j] and i > j, increment pairs by 1
// return total good pairs

var numIdenticalPairs = function(nums) {
    let pairs = 0
    for(let i = 0; i < nums.length; i++){
        for(let j = 1; j < nums.length; j++){
            if( nums[i] == nums[j] && i < j){
                pairs++
            }
        }
    }
    
    return pairs
};