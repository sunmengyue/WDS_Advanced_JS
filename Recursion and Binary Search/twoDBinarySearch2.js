function twoDBinarySearch(arr, target) {
  // binary search in row
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = start + Math.floor((end - start) / 2);
    const targetRow = arr[mid][0];
    if (targetRow === target) {
      return `${mid}`;
    } else if (targetRow < target) {
      start = mid + 1;
    } else {
      start = mid - 1;
    }
  }
  // binary search in collumn
  let left = 0;
  let right = arr[0].length - 1;
  while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      let targetCol = arr[]
      if ()
  }
}
