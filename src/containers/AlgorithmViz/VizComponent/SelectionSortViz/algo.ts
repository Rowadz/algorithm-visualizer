import { DEFAULT_STEP_TIME } from 'app/const'

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
    for (let j = i + 1; j < copy.length; j++) {
      await new Promise<void>((res) =>
        setTimeout(() => {
          res()
        }, stepSpeed)
      )
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
