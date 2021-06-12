export const bubbleSort = async (
  arr: Array<number>,
  setI: (n: number) => void,
  setJ: (n: number) => void,
  setMinIdx: (n: number) => void,
  stepSpeed: number = 1000
) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      const right = arr[j + 1]
      const left = arr[j]

      if (left > right) {
        const x = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = x
      }
    }
  }
  return arr
}
