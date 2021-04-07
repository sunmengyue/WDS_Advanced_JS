function twoDBinarySearch(matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) return;
  let row = matrix.length;
  let col = matrix[0].length;
  let left = 0;
  let right = row * col - 1;
  let mid = 0;
  while (left <= right) {
    mid = ~~((left + right) / 2);
    let i = ~~(mid / col);
    let j = mid % col;
    console.log(matrix[i][j]);
    if (target === matrix[i][j]) {
      return `row: ${i}, col: ${j}`;
    } else if (target > matrix[i][j]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(
  twoDBinarySearch(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ],
    7,
  ),
);
