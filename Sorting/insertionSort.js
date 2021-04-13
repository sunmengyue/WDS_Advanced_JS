function insertionSort(arr) {
  const swap = (arr, a, b) => {
    return ([arr[a], arr[b]] = [arr[b], arr[a]]);
  };

  for (let i = 0; i < arr.length; i++) {
    let idxOfLowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idxOfLowest]) {
        idxOfLowest = j;
      }
    }
    // console.log('******************');
    // console.log(arr);
    // console.log('swap to :');
    swap(arr, i, idxOfLowest);
    // console.log(arr);
    // console.log('*****************');
  }
  return arr;
}

let myArr = [1, 2, 3, 4, 0];
insertionSort(myArr);
