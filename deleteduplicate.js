function removeDuplicatesByUsingFilter(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
function removeDuplicatesByUsingSet(arr) {
  return [...new Set(arr)];
}

function removeDuplicatesByUsingIndexOf(arr) {
  const unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
function removeDuplicatesByUsingMap(arr) {
  const map = new Map();
  arr.forEach((item) => map.set(item, item));
  return Array.from(map.values());
}

function removeDuplicatesByUsingSort(arr) {
  const newArr = [...arr];
  newArr.sort((a, b) => a - b);
  const result = [];
  newArr.forEach((item, index) => {
    if (item !== result[result.length - 1]) {
      result.push(item);
    }
  });
  return result;
}

const removeDuplicate = (arr, method) => {
  const removeDuplicateFunctions = {
    sort: removeDuplicatesByUsingSort,
    map: removeDuplicatesByUsingMap,
    filter: removeDuplicatesByUsingFilter,
    indexOf: removeDuplicatesByUsingIndexOf,
  };
  if (!removeDuplicateFunctions[method]) {
    throw new Error(
      "Invalid method. It should be 'REMOVE_DUPLICATES_BY_SORT' or 'REMOVE_DUPLICATES_BY_MAP'."
    );
  }
  return removeDuplicateFunctions[method](arr);
};

const arr = [1, 3, 2, 2, 3, 5, 6, 5];

console.log(removeDuplicate(arr, "sort"));
