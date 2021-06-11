function selectionSort(arr) {
  let minIdx
  for (let i = 0; i < arr.length; i++) {
    minIdx = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j
      }
    }
    ;[arr[minIdx], arr[i]] = [arr[i], arr[minIdx]]
  }
  return arr
}

console.log(selectionSort([1, 2, 3]))
console.log(selectionSort([1, -2, 3]))
console.log(selectionSort([-1, 2, 3]))
console.log(selectionSort([1, 2, -3]))
