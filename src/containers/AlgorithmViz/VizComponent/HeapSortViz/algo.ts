import { sleep } from 'app/helpers'
import { produce, original } from 'immer'
import Heap from 'heap'
import { TreeState } from '../MergeSortViz/types'

export const heapSort = async (
  arr: Array<number>,
  setTree: (obj: any) => void
) => {
  const sorted = []
  const heap = new Heap<number>()
  for (const item of arr) {
    heap.insert(item)
    await viz(heap, setTree)
    await sleep(1000)
  }

  for (let i = 0; i < arr.length; i++) {
    sorted.push(heap.pop())
  }

  return sorted
}

const viz = async (heap: Heap<number>, setTree: (obj: any) => void) => {
  setTree({ name: '', children: [] })
  await sleep(500)
  heap.toArray().forEach((item: number, index: number) => {
    if (index === 0) {
      setTree({ name: item, children: [] })
    } else if (index === 1) {
      setTree(
        produce((prevState: TreeState) => {
          prevState.children = [{ name: `${item}`, children: [] }]
        })
      )
    } else if (index === 2) {
      setTree(
        produce((prevState: TreeState) => {
          prevState.children = [
            ...prevState.children,
            { name: `${item}`, children: [] },
          ]
        })
      )
    } else if (index === 3) {
      setTree(
        produce((prevState: TreeState) => {
          prevState.children[0].children = [{ name: `${item}`, children: [] }]
        })
      )
    } else if (index === 4) {
      setTree(
        produce((prevState: TreeState) => {
          prevState.children[0].children = [
            ...prevState.children[0].children,
            { name: `${item}`, children: [] },
          ]
        })
      )
    } else if (index === 5 || index === 6) {
      // setTree(
      //   produce((prevState: TreeState) => {
      //     const { children } = prevState
      //     const [, secondChild] = children
      //     secondChild.children.push({ name: `${item}`, children: [] })
      //   })
      // )
    } else if (index === 7 || index === 8) {
      // setTree(
      //   produce((prevState: TreeState) => {
      //     const { children } = prevState
      //     const [firstChild] = children
      //     const [firstChildChild] = firstChild.children
      //     firstChildChild.children.push({ name: `${item}`, children: [] })
      //   })
      // )
    } else if (index === 9) {
      // setTree(
      //   produce((prevState: TreeState) => {
      //     const { children } = prevState
      //     const [firstChild] = children
      //     const [, secondChildChild] = firstChild.children
      //     secondChildChild.children.push({ name: `${item}`, children: [] })
      //   })
      // )
    }
  })
}
