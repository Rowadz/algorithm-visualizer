import { DEFAULT_STEP_TIME } from 'app/const'
import Heap from 'heap'

export const heapSort = async (arr: Array<number>) => {
  const sorted = []
  const heap1 = new Heap()
  arr.forEach((item: number) => {
    heap1.insert(item)
    console.log(heap1.toArray())
    
  })

  for (let i = 0; i < arr.length; i++) {
    sorted.push(heap1.pop())
  }

  return sorted
}
