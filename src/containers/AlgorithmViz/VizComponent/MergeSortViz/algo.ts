import { DEFAULT_STEP_TIME } from 'app/const'
import { produce, original } from 'immer'

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
  const rightArray: Array<number> = array.slice(mid)

  await new Promise<void>((res) => {
    setTimeout(() => {
      res()
    }, stepSpeed)
  })

  // if (leftTree && mid < 5) {
  //   console.group(`mid: ${mid}`)
  //   console.table({
  //     leftArray,
  //     rightArray,
  //     mid,
  //     array,
  //     right: array.slice(0, mid),
  //   })
  // }

  mapLvls(
    array.slice(0, mid),
    array.slice(mid),
    setTree,
    depthLevel,
    leftTree,
    rightTree
  )

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

const mapLvls = (
  leftArray: Array<number>,
  rightArray: Array<number>,
  setTree: (obj: any) => void,
  depthLevel: number = 1,
  leftTree: boolean = true,
  rightTree: boolean = false
) => {
  console.log({ leftTree, rightTree })
  if (leftTree && !rightTree) {
    if (depthLevel === 1) {
      setTree((prev: any) => ({
        ...prev,
        children: [
          { name: `[${leftArray.toString()}]`, children: [], id: 1 },
          { name: `[${rightArray.toString()}]`, children: [], id: 2 },
        ],
      }))
    } else if (depthLevel === 2) {
      setTree(
        produce((prev: any) => {
          const [leftNode] = prev.children
          leftNode.children.push(
            ...[
              { name: `[${leftArray.toString()}]`, children: [] },
              { name: `[${rightArray.toString()}]`, children: [] },
            ]
          )
        })
      )
    } else if (depthLevel === 3) {
      setTree(
        produce((prev: any) => {
          const [
            {
              children: [left],
            },
          ] = prev.children

          left.children.push(
            ...[
              { name: `[${leftArray.toString()}]`, children: [] },
              { name: `[${rightArray.toString()}]`, children: [] },
            ]
          )
        })
      )
    }
  } else if (rightTree && !leftTree) {
    if (depthLevel === 2) {
      setTree(
        produce((prev: any) => {
          const [, rightNode] = prev.children
          rightNode.children.push(
            ...[
              { name: `[${leftArray.toString()}]`, children: [] },
              { name: `[${rightArray.toString()}]`, children: [] },
            ]
          )
        })
      )
    } else if (depthLevel === 3) {
      setTree(
        produce((prev: any) => {
          const [, right] = prev.children
          console.log({ right: original(right) })
          right.children.push(
            ...[
              { name: `[${leftArray.toString()}]`, children: [] },
              { name: `[${rightArray.toString()}]`, children: [] },
            ]
          )
        })
      )
    }
  }
}
