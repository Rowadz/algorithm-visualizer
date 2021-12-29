import { sleep } from 'app/helpers'
import { indexes } from './interfaces'

export const quickSortRandomMode = async (
  array: Array<number>,
  setPivot: (n: number) => void,
  setArray: (a: Array<number>) => void,
  setIndexesObj: (obj: Partial<indexes>) => void
) => {
  return await quickSort(
    array,
    0,
    array.length - 1,
    setPivot,
    setArray,
    setIndexesObj
  )
}

const randomRangeNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min

const randomizedPartition = (
  array: Array<number>,
  start: number,
  end: number,
  setPivot: (n: number) => void,
  setArray: (a: Array<number>) => void,
  setIndexesObj: (obj: Partial<indexes>) => void
) => {
  // get a random pivot index
  const pIndex = randomRangeNumber(start, end)
  // swap the pIndex with the last one.
  const temp = array[end]
  array[end] = array[pIndex]
  array[pIndex] = temp
  setIndexesObj({ first: start, last: end })
  return partition(array, start, end, setPivot, setArray, setIndexesObj)
}

const partition = (
  array: Array<number>,
  start: number,
  end: number,
  setPivot: (n: number) => void,
  setArray: (a: Array<number>) => void,
  setIndexesObj: (obj: Partial<indexes>) => void
) => {
  start = start || 0
  end = end || array.length - 1

  const pivot = array[end]

  // first index is the pIndex
  let pIndex = start

  let temp
  // keep all elements smaller than pivot to the left.
  for (var i = start; i < end; i++) {
    if (array[i] <= pivot) {
      // swap elements that are smaller than pivot
      temp = array[i]
      array[i] = array[pIndex]
      array[pIndex] = temp
      // move the pIndex element after the swap
      pIndex++
    }
  }
  //swap the pivot with the pIndex element
  temp = array[pIndex]
  array[pIndex] = pivot
  array[end] = temp

  return pIndex
}

const quickSort = async (
  array: Array<number>,
  start: number,
  end: number,
  setPivot: (n: number) => void,
  setArray: (a: Array<number>) => void,
  setIndexesObj: (obj: Partial<indexes>) => void
): Promise<Array<number>> => {
  let pIndex

  start = start || 0
  end = end || array.length - 1

  if (start < end) {
    pIndex = randomizedPartition(
      array,
      start,
      end,
      setPivot,
      setArray,
      setIndexesObj
    )
    setPivot(pIndex)
    await sleep(2000)

    setArray([...array])
    await quickSort(array, start, pIndex - 1, setPivot, setArray, setIndexesObj)
    // await sleep(10000)
    await quickSort(array, pIndex + 1, end, setPivot, setArray, setIndexesObj)
  }

  return array
}
