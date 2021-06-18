<<<<<<< HEAD
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
=======
function mergeSort(array) {
  if (array.length < 2) {
    return array
  }

  const mid = Math.floor(array.length / 2)
  const leftArray = array.slice(0, mid)
  const rightArray = array.slice(mid, array.length)
  console.log({ leftArray, rightArray })
  const sortedLeft = mergeSort(leftArray)
  const sortedRight = mergeSort(rightArray)
  // console.log('~~~~~~~~~')
  // console.log({ sortedLeft, sortedRight })
  return merge(sortedLeft, sortedRight)
}

function merge(leftArray, rightArray) {
  const mergedArray = []
  while (leftArray.length && rightArray.length) {
    const [firstInLeft] = leftArray
    const [firstInRight] = rightArray
    if (firstInLeft > firstInRight) {
      mergedArray.push(rightArray.shift())
    } else {
      mergedArray.push(leftArray.shift())
    }
  }

  while (leftArray.length) {
    mergedArray.push(leftArray.shift())
  }

  while (rightArray.length) {
    mergedArray.push(rightArray.shift())
  }

  return mergedArray
}

console.log(mergeSort([-1, 3, 0, 12, 10, 100, -100]))
>>>>>>> 37a5ed17204f63485919a3ac62d1d25b01169ec7
