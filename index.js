function bubleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      const right = arr[j + 1]
      const left = arr[j]
      if (left > right) {
        const x = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = x
      }
    }
  }
  return arr
}

console.log(bubleSort([1, 2, 3]))
console.log(bubleSort([1, -2, 3]))
console.log(bubleSort([-1, 2, 3]))
console.log(bubleSort([1, 2, -3]))
