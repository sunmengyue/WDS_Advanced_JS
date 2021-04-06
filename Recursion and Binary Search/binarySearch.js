function binarySearch(arr, targetVal) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (arr[middle] !== targetVal && left <= right) {
    if (targetVal < arr[middle]) {
      right = middle - 1;
    } else if (targetVal > arr[middle]) {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  return arr[middle] === targetVal ? middle : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 10));
