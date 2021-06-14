import { DEFAULT_STEP_TIME } from 'app/const'

export const mergeSort = async (
  array: Array<number>,
  setTree: (obj: any) => void,
  depthLevel: number = 1,
  leftTree: boolean = true,
  rightTree: boolean = false,
  stepSpeed: number = DEFAULT_STEP_TIME
): Promise<Array<number>> => {
  if (array.length < 2) {
    return array
  }

  const mid = Math.floor(array.length / 2)
  const leftArray: Array<number> = array.slice(0, mid)
  const rightArray: Array<number> = array.slice(mid, array.length)

  await new Promise<void>((res) => {
    setTimeout(() => {
      res()
    }, stepSpeed)
  })

  console.log({ depthLevel, leftArray, rightArray, leftTree, rightTree })

  //   setTree((prev: any) => ({
  //     ...prev,
  //     children: [
  //       ...prev.children,
  //       {
  //         name: `[${leftArray.toString()}]`,
  //         children: [{ name: `[${rightArray.toString()}]`, children: [] }],
  //         id: 1,
  //       },
  //     ],
  //   }))
  const sortedLeft: Array<number> = await mergeSort(
    leftArray,
    setTree,
    depthLevel + 1
  )
  const sortedRight: Array<number> = await mergeSort(
    rightArray,
    setTree,
    depthLevel + 1,
    false,
    true
  )
  return merge(sortedLeft, sortedRight)
}

const merge = (
  leftArray: Array<number>,
  rightArray: Array<number>
): Array<number> => {
  const mergedArray: Array<number> = []
  while (leftArray.length && rightArray.length) {
    const [firstInLeft] = leftArray
    const [firstInRight] = rightArray
    if (firstInLeft > firstInRight) {
      mergedArray.push(rightArray.shift() as number)
    } else {
      mergedArray.push(leftArray.shift() as number)
    }
  }

  while (leftArray.length) {
    mergedArray.push(leftArray.shift() as number)
  }

  while (rightArray.length) {
    mergedArray.push(rightArray.shift() as number)
  }

  return mergedArray
}
