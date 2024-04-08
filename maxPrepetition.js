function findMaxRepetitions(arr) {
  const counts = {
    maxCount: 0,
    result: [],
  };
  arr.forEach((num) => {
    counts[num] = (counts[num] || 0) + 1;

    if (counts[num] > counts.maxCount) {
      counts.maxCount = counts[num];
      counts.result = [num];
    } else if (counts[num] == counts.maxCount) {
      counts.result.push(num);
    }
  });

  return counts.result;
}

const array = [1, 2, 3, 4, 2, 3, 5, 5, 5, 3, 3, 3];
console.log(findMaxRepetitions(array));
