function twoSum(array, target) {
  const indices = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        indices.push(i, j);
      }
    }
  }

  return indices;
}

console.log(twoSum([1, 2, 3], 4));
