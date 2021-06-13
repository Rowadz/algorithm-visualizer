import { DEFAULT_STEP_TIME } from "app/const"

export const selectionSort = async (
  arr: Array<number>,
  setI: (n: number) => void,
  setJ: (n: number) => void,
  setMinIdx: (n: number) => void,
  stepSpeed: number = DEFAULT_STEP_TIME
) => {
  let minIdx: any
  for (let i = 0; i < arr.length; i++) {
    minIdx = i
    for (let j = i + 1; j < arr.length; j++) {
      await new Promise<void>((res) =>
        setTimeout(() => {
          res()
        }, stepSpeed)
      )
      setI(i)
      setJ(j)
      setMinIdx(minIdx)
      if (arr[j] < arr[minIdx]) {
        minIdx = j
      }
    }
    ;[arr[minIdx], arr[i]] = [arr[i], arr[minIdx]]
  }
  return arr
}
