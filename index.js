// function selectionSort(arr) {
//   let minIdx;
//   for (let i = 0; i < arr.length; i++) {
//     minIdx = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIdx]) {
//         minIdx = j;
//       }
//     }
//     [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]];
//   }
//   return arr;
// }

// console.log(selectionSort([1, 2, 3]));
// console.log(selectionSort([1, -2, 3]));
// console.log(selectionSort([-1, 2, 3]));
// console.log(selectionSort([1, 2, -3]));

function insertionSort(arr) {
  let i, key, j;
  for (i = 1; i < arr.length; i++) {
    key = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(insertionSort([1, 2, 3]));
console.log(insertionSort([1, -2, 3]));
console.log(insertionSort([-1, 2, 3]));
console.log(insertionSort([1, 2, -3]));
