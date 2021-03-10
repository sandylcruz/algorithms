// Given an array nums. We define a running sum of an array
// as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

const nums = [1, 2, 3, 4];

function runningSum(array) {
  let sumArray = [];
  let lastSum = 0;

  array.forEach((num) => {
    lastSum += num;
    sumArray.push(lastSum);
  });

  return sumArray;
}
console.log(runningSum(nums));
