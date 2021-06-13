import { DEFAULT_STEP_TIME } from 'app/const'

export const bubbleSort = async (
  arr: Array<number>,
  setLeft: (n: number) => void,
  setRight: (n: number) => void,
  stepSpeed: number = DEFAULT_STEP_TIME
) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      const right = arr[j + 1]
      const left = arr[j]
      await new Promise<void>((res) => {
        setTimeout(() => {
          res()
        }, stepSpeed)
      })
      setLeft(j)
      setRight(j + 1)
      if (left > right) {
        const x = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = x
      }
    }
  }
  return arr
}
