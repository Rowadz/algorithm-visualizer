import { DEFAULT_STEP_TIME } from 'app/const'
import { sleep } from 'app/helpers'
import { produce, original } from 'immer'
import { TreeState } from './types'

const { floor } = Math

export const mergeSort = async (
  array: Array<number>,
  setTree: (obj: any) => void,
  compareColor: string
): Promise<void> => {
  let mid = floor(array.length / 2)
  const leftArray: Array<number> = array.slice(0, mid)
  const rightArray: Array<number> = array.slice(mid)
  setTree(
    produce((prev: TreeState) => {
      prev.children = [
        { name: createName(leftArray), children: [], arr: leftArray },
      ]
    })
  )
  await sleep()
  setTree(
    produce((prev: TreeState) => {
      const [leftLvl1] = prev.children
      let mid = floor(leftArray.length / 2)
      const leftArray2: Array<number> = leftArray.slice(0, mid)

      leftLvl1.children = [
        { name: createName(leftArray2), children: [], arr: leftArray2 },
      ]
    })
  )

  await sleep()
  setTree(
    produce((prev: TreeState) => {
      const [
        {
          children: [leftLvl2],
        },
      ] = prev.children
      const arr = original(leftLvl2.arr) || []
      let mid = floor(arr.length / 2)
      const array: Array<number> = arr.slice(0, mid)
      leftLvl2.children = [
        { name: createName(array), children: [], arr: array },
      ]
    })
  )

  await sleep()
  setTree(
    produce((prev: TreeState) => {
      const [
        {
          children: [leftLvl2],
        },
      ] = prev.children
      const arr = original(leftLvl2.arr) || []
      let mid = floor(arr.length / 2)
      const array: Array<number> = arr.slice(mid)
      leftLvl2.children = [
        leftLvl2.children[0],
        { name: createName(array), children: [], arr: array },
      ]
    })
  )

  await sleep()
  setTree(
    produce((prev: TreeState) => {
      const [
        {
          children: [leftLvl2],
        },
      ] = prev.children
      leftLvl2.children = leftLvl2.children.map((obj: TreeState) => ({
        ...obj,
        color: compareColor,
      }))
    })
  )

  await sleep()
  setTree(
    produce((prev: TreeState) => {
      const [
        {
          children: [leftLvl2],
        },
      ] = prev.children
      const arr = leftLvl2.arr?.slice() || []
      arr.sort((a, b) => a - b)
      leftLvl2.children = []
      leftLvl2.name = createName(arr)
      leftLvl2.arr = arr
    })
  )

  await sleep()
  setTree(
    produce((prev: TreeState) => {
      const [leftLvl1] = prev.children
      const mid = floor(leftArray.length / 2)
      const leftArray2: Array<number> = leftArray.slice(mid)

      leftLvl1.children = [
        leftLvl1.children[0],
        { name: createName(leftArray2), children: [], arr: leftArray2 },
      ]
    })
  )

  await sleep()
  setTree(
    produce((prev: TreeState) => {
      const [
        {
          children: [, leftRight],
        },
      ] = prev.children
      const arr = leftRight.arr?.slice() || []
      const mid = floor(arr.length / 2)
      const array: Array<number> = arr.slice(0, mid)

      leftRight.children = [
        { name: createName(array), children: [], arr: array },
      ]
    })
  )
  await sleep()
  setTree(
    produce((prev: TreeState) => {
      const [
        {
          children: [, leftRight],
        },
      ] = prev.children
      const arr = leftRight.arr?.slice() || []
      const mid = floor(arr.length / 2)
      const array: Array<number> = arr.slice(mid)

      leftRight.children = [
        leftRight.children[0],
        { name: createName(array), children: [], arr: array },
      ]
    })
  )
  await sleep()
  setTree(
    produce((prev: TreeState) => {
      const [
        {
          children: [
            ,
            {
              children: [, leftRightRight],
            },
          ],
        },
      ] = prev.children
      const arr = leftRightRight.arr?.slice() || []
      const mid = floor(arr.length / 2)
      const array: Array<number> = arr.slice(0, mid)

      leftRightRight.children = [
        { name: createName(array), children: [], arr: array },
      ]
    })
  )

  await sleep()
  setTree(
    produce((prev: TreeState) => {
      const [
        {
          children: [
            ,
            {
              children: [, leftRightRight],
            },
          ],
        },
      ] = prev.children
      const arr = leftRightRight.arr?.slice() || []
      const mid = floor(arr.length / 2)
      const array: Array<number> = arr.slice(mid)

      leftRightRight.children = [
        leftRightRight.children[0],
        { name: createName(array), children: [], arr: array },
      ]
    })
  )

  await sleep()
  setTree(
    produce((prev: TreeState) => {
      const [
        {
          children: [
            ,
            {
              children: [, leftRightRight],
            },
          ],
        },
      ] = prev.children
      leftRightRight.children = leftRightRight.children.map(
        (obj: TreeState) => ({
          ...obj,
          color: compareColor,
        })
      )
    })
  )

  await sleep()
  setTree(
    produce((prev: TreeState) => {
      const [
        {
          children: [
            ,
            {
              children: [, leftRightRight],
            },
          ],
        },
      ] = prev.children
      const arr = leftRightRight.arr?.slice() || []
      arr.sort((a, b) => a - b)
      leftRightRight.children = []
      leftRightRight.name = createName(arr)
      leftRightRight.arr = arr
    })
  )

  await sleep()
  setTree(
    produce((prev: TreeState) => {
      const [
        {
          children: [, leftRight],
        },
      ] = prev.children
      leftRight.children = leftRight.children.map((obj: TreeState) => ({
        ...obj,
        color: compareColor,
      }))
    })
  )

  await sleep()
  setTree(
    produce((prev: TreeState) => {
      const [
        {
          children: [, leftRight],
        },
      ] = prev.children
      const arr = leftRight.arr?.slice() || []
      arr.sort((a, b) => a - b)
      leftRight.children = []
      leftRight.name = createName(arr)
      leftRight.arr = arr
    })
  )

  await sleep()
  setTree(
    produce((prev: TreeState) => {
      const [left] = prev.children
      left.children = left.children.map((obj: TreeState) => ({
        ...obj,
        color: compareColor,
      }))
    })
  )

  await sleep()
  setTree(
    produce((prev: TreeState) => {
      const [left] = prev.children
      const arr = left.arr?.slice() || []
      arr.sort((a, b) => a - b)
      left.children = []
      left.name = createName(arr)
      left.arr = arr
    })
  )

  await sleep()

  setTree(
    produce((prev: TreeState) => {
      prev.children = [
        prev.children[0],
        { name: createName(rightArray), children: [], arr: rightArray },
      ]
    })
  )
  await sleep()
  setTree(
    produce((prev: TreeState) => {
      const [, rightLvl1] = prev.children
      const mid = floor(rightArray.length / 2)
      const array: Array<number> = rightArray.slice(0, mid)

      rightLvl1.children = [
        { name: createName(array), children: [], arr: array },
      ]
    })
  )

  await sleep()
  setTree(
    produce((prev: TreeState) => {
      const [
        ,
        {
          children: [rightLvl2],
        },
      ] = prev.children
      const arr = original(rightLvl2.arr) || []
      let mid = floor(arr.length / 2)
      const array: Array<number> = arr.slice(0, mid)
      rightLvl2.children = [
        { name: createName(array), children: [], arr: array },
      ]
    })
  )

  await sleep()
  setTree(
    produce((prev: TreeState) => {
      const [
        ,
        {
          children: [rightLvl2],
        },
      ] = prev.children
      const arr = original(rightLvl2.arr) || []
      let mid = floor(arr.length / 2)
      const array: Array<number> = arr.slice(mid)
      rightLvl2.children = [
        rightLvl2.children[0],
        { name: createName(array), children: [], arr: array },
      ]
    })
  )

  await sleep()
  setTree(
    produce((prev: TreeState) => {
      const [
        ,
        {
          children: [rightLvl2],
        },
      ] = prev.children
      rightLvl2.children = rightLvl2.children.map((obj: TreeState) => ({
        ...obj,
        color: compareColor,
      }))
    })
  )

  await sleep()
  setTree(
    produce((prev: TreeState) => {
      const [
        ,
        {
          children: [rightLvl2],
        },
      ] = prev.children
      const arr = rightLvl2.arr?.slice() || []
      arr.sort((a, b) => a - b)
      rightLvl2.children = []
      rightLvl2.name = createName(arr)
      rightLvl2.arr = arr
    })
  )

  await sleep()
  setTree(
    produce((prev: TreeState) => {
      const [, rightLvl1] = prev.children
      const mid = floor(rightArray.length / 2)
      const array: Array<number> = rightArray.slice(mid)

      rightLvl1.children = [
        rightLvl1.children[0],
        { name: createName(array), children: [], arr: array },
      ]
    })
  )

  await sleep()
  setTree(
    produce((prev: TreeState) => {
      const [
        ,
        {
          children: [, rightRight],
        },
      ] = prev.children
      const arr = rightRight.arr?.slice() || []
      const mid = floor(arr.length / 2)
      const array: Array<number> = arr.slice(0, mid)

      rightRight.children = [
        { name: createName(array), children: [], arr: array },
      ]
    })
  )

  await sleep()
  setTree(
    produce((prev: TreeState) => {
      const [
        ,
        {
          children: [, rightRight],
        },
      ] = prev.children
      const arr = rightRight.arr?.slice() || []
      const mid = floor(arr.length / 2)
      const array: Array<number> = arr.slice(mid)

      rightRight.children = [
        rightRight.children[0],
        { name: createName(array), children: [], arr: array },
      ]
    })
  )

  await sleep()
  setTree(
    produce((prev: TreeState) => {
      const [
        ,
        {
          children: [
            ,
            {
              children: [, rightRightRight],
            },
          ],
        },
      ] = prev.children
      const arr = rightRightRight.arr?.slice() || []
      const mid = floor(arr.length / 2)
      const array: Array<number> = arr.slice(0, mid)

      rightRightRight.children = [
        { name: createName(array), children: [], arr: array },
      ]
    })
  )

  await sleep()
  setTree(
    produce((prev: TreeState) => {
      const [
        ,
        {
          children: [
            ,
            {
              children: [, rightRightRight],
            },
          ],
        },
      ] = prev.children
      const arr = rightRightRight.arr?.slice() || []
      const mid = floor(arr.length / 2)
      const array: Array<number> = arr.slice(mid)

      rightRightRight.children = [
        rightRightRight.children[0],
        { name: createName(array), children: [], arr: array },
      ]
    })
  )

  await sleep()
  setTree(
    produce((prev: TreeState) => {
      const [
        ,
        {
          children: [
            ,
            {
              children: [, rightRightRight],
            },
          ],
        },
      ] = prev.children
      rightRightRight.children = rightRightRight.children.map(
        (obj: TreeState) => ({
          ...obj,
          color: compareColor,
        })
      )
    })
  )

  await sleep()
  setTree(
    produce((prev: TreeState) => {
      const [
        ,
        {
          children: [
            ,
            {
              children: [, rightRightRight],
            },
          ],
        },
      ] = prev.children
      const arr = rightRightRight.arr?.slice() || []
      arr.sort((a, b) => a - b)
      rightRightRight.children = []
      rightRightRight.name = createName(arr)
      rightRightRight.arr = arr
    })
  )

  await sleep()
  setTree(
    produce((prev: TreeState) => {
      const [
        ,
        {
          children: [, rightright],
        },
      ] = prev.children
      rightright.children = rightright.children.map((obj: TreeState) => ({
        ...obj,
        color: compareColor,
      }))
    })
  )

  await sleep()
  setTree(
    produce((prev: TreeState) => {
      const [
        ,
        {
          children: [, rightright],
        },
      ] = prev.children
      const arr = rightright.arr?.slice() || []
      arr.sort((a, b) => a - b)
      rightright.children = []
      rightright.name = createName(arr)
      rightright.arr = arr
    })
  )

  await sleep()
  setTree(
    produce((prev: TreeState) => {
      const [, right] = prev.children
      right.children = right.children.map((obj: TreeState) => ({
        ...obj,
        color: compareColor,
      }))
    })
  )

  await sleep()
  setTree(
    produce((prev: TreeState) => {
      const [, right] = prev.children
      const arr = right.arr?.slice() || []
      arr.sort((a, b) => a - b)
      right.children = []
      right.name = createName(arr)
      right.arr = arr
    })
  )

  await sleep()
  setTree(
    produce((prev: TreeState) => {
      prev.children = prev.children.map((obj: TreeState) => ({
        ...obj,
        color: compareColor,
      }))
    })
  )

  await sleep()
  setTree(
    produce((prev: TreeState) => {
      array = [...array].sort((a, b) => a - b)
      prev.children = []
      prev.name = createName(array)
      prev.arr = array
      prev.width = 300
    })
  )
}

const createName = (arr: Array<number>): string => `[${arr.toString()}]`
