export const selectionSort = async (
  arr: Array<number>,
  setI: (n: number) => void,
  setJ: (n: number) => void,
  setMinIdx: (n: number) => void,
  stepSpeed: number = 1000
) => {
  let minIdx
  for (let i = 0; i < arr.length; i++) {
    minIdx = i
    for (let j = i + 1; j < arr.length; j++) {
      await new Promise<void>((res) =>
        setTimeout(() => {
          res()
          setI(i)
          setJ(j)
        }, stepSpeed)
      )
      if (arr[j] < arr[minIdx]) {
        minIdx = j
        setMinIdx(minIdx)
      }
    }
    ;[arr[minIdx], arr[i]] = [arr[i], arr[minIdx]]
  }
  return arr
}
