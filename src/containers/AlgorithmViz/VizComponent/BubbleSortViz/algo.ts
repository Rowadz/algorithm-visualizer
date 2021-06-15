import { DEFAULT_STEP_TIME } from 'app/const'

export const bubbleSort = async (
  arr: Array<number>,
  setLeft: (n: number) => void,
  setRight: (n: number) => void,
  setArray: (arr: Array<number>) => void,
  stepSpeed: number = DEFAULT_STEP_TIME
) => {
  const copy = [...arr]
  for (let i = 0; i < copy.length; i++) {
    for (let j = 0; j < copy.length - 1 - i; j++) {
      const right = copy[j + 1]
      const left = copy[j]
      await new Promise<void>((res) => {
        setTimeout(() => {
          res()
        }, stepSpeed)
      })
      setLeft(j)
      setRight(j + 1)
      if (left > right) {
        const x = copy[j]
        copy[j] = copy[j + 1]
        copy[j + 1] = x
      }
      setArray(copy)
    }
  }
}
