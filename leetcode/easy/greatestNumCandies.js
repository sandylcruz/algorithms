/*
Given the array candies and the integer extraCandies, 
where candies[i] represents the number of candies that 
the ith kid has.

For each kid check if there is a way to distribute 
extraCandies among the kids such that he or she can 
have the greatest number of candies among them. 
Notice that multiple kids can have the greatest number 
of candies.
*/

function greatestNumCandies(array, extraCandy) {
  const returnArray = [];

  for (let i = 0; i < array.length; i++) {
    const newCandyAmount = array[i] + extraCandy;

    for (let j = 0; j < array.length; j++) {
      if (newCandyAmount < array[j]) {
        returnArray.push(newCandyAmount, array[j], false);
        break;
      }

      returnArray.push(newCandyAmount, array[j], true);
    }
  }

  return returnArray;
}

console.log(greatestNumCandies([2, 3, 5, 1, 3], 3));
