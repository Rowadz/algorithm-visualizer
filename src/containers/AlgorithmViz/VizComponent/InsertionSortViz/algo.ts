import { store } from 'app/store'
import { ALGOS } from 'const'

export const insertionSort = async (
  arr: Array<number>,
  setI: (n: number) => void,
  setJ: (n: number) => void,
  setKey: (n: number) => void,
  stepSpeed: number = 1000
) => {
  let key: any
  let j: any
  for (let i = 1; i < arr.length; i++) {
    key = arr[i]
    setKey(i)
    setI(i)
    j = i - 1
    setJ(j)
    while (j >= 0 && arr[j] > key) {
      try {
        await new Promise<void>((res, rej) =>
          setTimeout(() => {
            if (store.getState().algorithm !== ALGOS.INSERTION_SORT) {
              rej()
            } else {
              res()
            }
          }, stepSpeed)
        )
      } catch {
        throw new Error('Nothing')
      }
      arr[j + 1] = arr[j]
      j--
      setJ(j)
      arr[j + 1] = key
      setKey(j + 1)
    }
  }
  return arr
}
