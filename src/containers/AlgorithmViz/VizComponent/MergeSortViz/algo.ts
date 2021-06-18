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
  if (leftTree) {
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
            {
              children: [leftRight],
            },
          ] = prev.children
          let ref = null
          if (left.children.length === 0) {
            ref = left.children
          } else {
            ref = leftRight.children
          }
          ref.push(
            ...[
              { name: `[${leftArray.toString()}]`, children: [] },
              { name: `[${rightArray.toString()}]`, children: [] },
            ]
          )
        })
      )
    }
  } else if (rightTree) {
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
          // if the root->left->right is empty then add to it
          // else if root->right children is emtype the add to it
          // else add to root->right->right
          const [
            {
              children: [, leftRight],
            },
            right,
          ] = prev.children
          let ref = null
          if (leftRight.children.length === 0) {
            ref = leftRight.children
          } else if (right.children === 0) {
            ref = right.children
          } else {
            const [, rightOfRight] = right.children
            ref = rightOfRight.children
          }
          ref.push(
            ...[
              { name: `[${leftArray.toString()}]`, children: [] },
              { name: `[${rightArray.toString()}]`, children: [] },
            ]
          )
        })
      )
    }else if (depthLevel === 4) {
      // will always be root->left->right->right
      // or root->right->right->right
      setTree(produce((prev: any) => {
        const [{children: [, {children: [, leftRight]}]}] = prev.children
        let ref = null
        if (leftRight.children.length === 0) {
          ref = leftRight.children
        } else {
          const [, {children: [, {children: [, rightRight]}]} ] = prev.children
          ref = rightRight.children
        }
        
        ref.push(
          ...[
            { name: `[${leftArray.toString()}]`, children: [] },
            { name: `[${rightArray.toString()}]`, children: [] },
          ]
        )
      }))
    }
  }
}
