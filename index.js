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
