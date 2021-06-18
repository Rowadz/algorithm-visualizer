import { store } from 'app/store'
import { DEFAULT_STEP_TIME,ALGOS } from 'app/const'

export const selectionSort = async (
  arr: Array<number>,
  setI: (n: number) => void,
  setJ: (n: number) => void,
  setMinIdx: (n: number) => void,
  setArray: (arr: Array<number>) => void,
  stepSpeed: number = DEFAULT_STEP_TIME
) => {
  const copy = [...arr]
  let minIdx: any
  for (let i = 0; i < copy.length; i++) {
    minIdx = i
    for (let j = i + 1; j < arr.length; j++) {
      try {
        await new Promise<void>((res, rej) =>
          setTimeout(() => {
            if (store.getState().algorithm !== ALGOS.SELECTION_SORT) {
              rej()
            } else {
              res()
            }
          }, stepSpeed)
        )
      } catch {
        throw new Error('Nothing')
      }
      setI(i)
      setJ(j)
      setMinIdx(minIdx)
      if (copy[j] < copy[minIdx]) {
        minIdx = j
      }
    }
    ;[copy[minIdx], copy[i]] = [copy[i], copy[minIdx]]
    setArray(copy)
  }
}
