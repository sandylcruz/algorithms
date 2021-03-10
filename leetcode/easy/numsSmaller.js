/* Given the array nums, for each 
nums[i] find out how many numbers in 
the array are smaller than it. That is, 
for each nums[i] you have to count the 
number of valid j's such that j != i 
and nums[j] < nums[i].

Return the answer in an array.
*/
function howManySmaller(array) {
  let countsArray = [];

  for (let i = 0; i < nums.length; i++) {
    count = 0;

    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count += 1;
      }
    }
    countsArray.push(count);
  }

  return countsArray;
}

console.log(howManySmaller([8, 1, 2, 2, 3]));
