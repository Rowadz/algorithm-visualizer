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

  await new Promise<void>((res) => {
    setTimeout(() => {
      res()
    }, stepSpeed)
  })

  reduceLevels({
    leftArray: sortedLeft,
    setTree,
    depthLevel,
    leftTree,
    rightTree,
  })

  const sortedRight: Array<number> = await mergeSort(
    rightArray,
    setTree,
    depthLevel + 1,
    false,
    true
  )

  reduceLevels({
    rightArray: sortedRight,
    setTree,
    depthLevel,
    leftTree,
    rightTree,
  })

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
              children: [leftLeft],
            },
            {
              children: [rightLeft],
            },
          ] = prev.children
          let ref = null
          if (leftLeft.children.length === 0 && !leftLeft.sorted) {
            ref = leftLeft.children
          } else {
            ref = rightLeft.children
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
          if (leftRight?.children.length === 0 && !leftRight.sorted) {
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
    } else if (depthLevel === 4) {
      // will always be root->left->right->right
      // or root->right->right->right
      setTree(
        produce((prev: any) => {
          const [
            {
              children: [
                ,
                {
                  children: [, leftRight],
                },
              ],
            },
          ] = prev.children
          let ref = null
          if (leftRight?.children.length === 0 && !leftRight.sorted) {
            ref = leftRight.children
          } else {
            const [
              ,
              {
                children: [
                  ,
                  {
                    children: [, rightRight],
                  },
                ],
              },
            ] = prev.children
            ref = rightRight.children
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
  }
}

interface ReduceLevelsArgs {
  leftArray?: Array<number>
  rightArray?: Array<number>
  setTree: (obj: any) => void
  depthLevel?: number
  leftTree?: boolean
  rightTree?: boolean
}

const reduceLevels = ({
  leftArray,
  rightArray,
  setTree,
  depthLevel = 1,
  leftTree = true,
  rightTree = false,
}: ReduceLevelsArgs) => {
  if (leftTree) {
    if (depthLevel === 2) {
      if (leftArray) {
        setTree(
          produce((prev: any) => {
            const [leftNode] = prev.children

            leftNode.children = [
              {
                name: `[${leftArray?.toString()}]`,
                children: [],
                sorted: true,
              },
              leftNode.children[1],
            ]
          })
        )
      } else {
        setTree(
          produce((prev: any) => {
            const [leftNode] = prev.children

            leftNode.children = [
              leftNode.children[0],
              {
                name: `[${rightArray?.toString()}]`,
                children: [],
                sorted: true,
              },
            ]
          })
        )
      }
    }
  } else {
    // if (depthLevel === 2) {
    //   setTree(
    //     produce((prev: any) => {
    //       const [, rightNode] = prev.children
    //       rightNode.children = [
    //         { name: `[${leftArray?.toString()}]`, children: [], sorted: true },
    //         rightNode.children[1],
    //       ]
    //     })
    //   )
    // }
  }
  // console.log(leftArray, rightArray, { depthLevel, leftTree, rightTree })
}
