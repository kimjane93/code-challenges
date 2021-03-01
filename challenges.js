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


// Shuffle The Array

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn], and a second argumeny of n.
// Return the array in the form [x1,y1,x2,y2,...,xn,yn]
// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
// constraint nums.length == 2n

// pseudocode
// set an empty array to receive the alternating indexed values
// loop through the nums array, with i being less than nums length divided by two, as we will be inserting two shuffled values per iteration of i, so we do not need to the full length of nums, keeping in mind that nums will be 2*n
// for each iteration of i, first push the value at nums[i] into the new array
// then push nums[i + n] to alternate values based on the n argument that gives you your second starting point
// increment n++ at the end of each iteration
// return shuffled array 

var shuffle = function(nums, n) {
    let shuffledArr = []
    for(let i = 0; i < nums.length/2; i++){
            shuffledArr.push(nums[i])
            shuffledArr.push(nums[n])
        n++
    }
    return shuffledArr
};


// Best Time to Buy and Sell Stock - Leetcode


// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// pseudocode
// set a variable to hold the cheapest price to buy at starting at index of 0
// set a variable to hold the maximum profit starting at 0
// use a for loop to iterate through the prices array and find the cheapest price, storing cheapest price and comparing it against the current value of i as the current price it is being compared against, use ternary to reset values of cheapest price as needed
// set current potential profit variable to equal currentprice - cheapest price after ternary set/comparison
// conditonally reset max profit variable if current profit is greater than max profit's current value
// return maximum profit


var maxProfit = function(prices) {
    let cheapestPrice = prices[0];
    let maxProfit = 0;
    
    for (let i = 0; i < prices.length; i++) {
        let currentPrice = prices[i]
        cheapestPrice = (currentPrice < cheapestPrice) ? currentPrice : cheapestPrice
        let profit = currentPrice - cheapestPrice
        maxProfit = (profit > maxProfit) ? profit : maxProfit   
    }
    
    return maxProfit;
};


// Find the Highest Altitude - Leetcode

// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.
// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

// Example 2:

// Input: gain = [-4,-3,-2,-1,4,3,2]
// Output: 0
// Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.


// pseudocode

// set a new variable to hold an array that will receive the values of the gains between altitude points, with a starting value of zero per description
// loop through the gains array, adding index of i and i + 1 together to get the next value to n+1 length
// sort? or loop through to find highest number

var largestAltitude = function(gain) {
    let altitudes = [0]
    for(let i = 0; i < gain.length; i++){
        let alt = altitudes[i] + gain[i]
        altitudes.push(alt)
    }
    let biggest = 0
    for(let i = 0; i < altitudes.length; i++){
        if(altitudes[i] > biggest){
            biggest = altitudes[i]
        }
    }
    return biggest
};



// Split a String in Balanced Strings - Leetcode

// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
// Given a balanced string s, split it in the maximum amount of balanced strings.
// Return the maximum amount of split balanced strings.
// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
// s[i] is either 'L' or 'R'.
// s is a balanced string.


// pseudocode
// set variables to watch the count of even substring occurrences of R's and L's, and a variable to count Rs and a variable to coutn Ls
// creat a for loop iterating through string, and for each index of the string, check if it is an R or L and update the corresponding count approrpriately
// at the end of each instance in the loop, check if the count of current r's matches the count of current l's, and if true, increment the overall count of even instances of substrings it could be split into
// return count

var balancedStringSplit = function(s) {
    let count = 0
    let lCount = 0
    let rCount = 0
    for(let i = 0; i < s.length; i ++){
        if(s[i] === 'R'){
            rCount++
        }
        if(s[i] === 'L'){
            lCount++
        }
        if(lCount === rCount){
            count++
        }
        }
    return count
};


// Deganging an IP Address - Leetcode

// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".
// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

// pseudocode
// simple way is to split on dots and join again on '[.]'

// otherwise, create an empty array to hold your defanged address
// create a for looop to iterate through the original address length, if value at index i is a dot, push a [.] into the new array, otherwise just push the curretn value
// return the new defanged array 

// var defangIPaddr = function(address) {
//    return address.split('.').join('[.]')
// }

var defangIPaddr = function(address) {
    let destrAddress = []
    for(let i = 0; i < address.length; i++){
        if(address[i] === '.'){
            destrAddress.push('[.]')
        } else {
            destrAddress.push(address[i])
        }
    }
      return destrAddress.join('')
  };


// Two Sum - Leetcode 
//   Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//   You may assume that each input would have exactly one solution, and you may not use the same element twice.
  
//   You can return the answer in any order.

// pseudocode
// set an empty array to hold values
// write a nested loop, with second loop starting at index + 1, iterating over nums, and if nums[i] + nums[j] == target, push them into new array, i first, return the new array

  var twoSum = function(nums, target) {
    let matches = []
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                matches.push(i)
                matches.push(j)
            }
        }
    }
    return matches
};






// Shuffle String - Leetcode

// Given a string s and an integer array indices of the same length.
// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
// Return the shuffled string.

// pseudocode
// set an empty array to receive the shuffled values
// loop through the string and use i to determine where the value of s[i] will go in the new array based on the value of indicces[i]
// splice the value into the new array
// return the new array joined into a string

