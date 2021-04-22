let myArr = [3, 534, 3465, 53452, 3453];

const mergeArrays = (arrA, arrB) => {
  let newArr = [];
  let i, j;
  i = 0;
  j = 0;
  while (i < arrA.length && j < arrB.length) {
    if (arrA[i] < arrB[j]) {
      newArr.push(arrA[i]);
      i++;
    } else {
      newArr.push(arrB[j]);
      j++;
    }
  }
  while (i < arrA.length) {
    newArr.push(arrA[i]);
    i++;
  }

  while (j < arrB.length) {
    newArr.push(arrB[j]);
    j++;
  }
  return newArr;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeArrays(left, right);
};

console.log(mergeSort(myArr));
