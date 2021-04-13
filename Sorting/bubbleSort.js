const bubbleSort = (arr) => {
  let swap;
  for (let i = arr.length - 1; i > 0; i--) {
    swap = false;
    for (let j = 0; j < i; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
      }
    }
    if (!swap) break;
  }
  return arr;
};
console.log(bubbleSort([8, 1, 2, 3, 4, 5]));
