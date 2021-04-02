// Binary Search
function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (arr[mid] !== val && start < end) {
    if (val < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }

  if (arr[mid] === val) {
    return mid;
  } else {
    return -1;
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 9, 10, 23, 25, 29], 40));
