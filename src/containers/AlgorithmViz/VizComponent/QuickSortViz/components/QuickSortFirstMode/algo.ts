// import { DEFAULT_STEP_TIME } from 'app/const'
// import { produce, original } from 'immer'
import { sleep } from 'app/helpers'

export const quickSortFirstMode = async (
    array: Array<number>,
    setPivot: (n: number) => void,
    setArray: (a: Array<number>) => void,
    setTempIndex: (n: number) => void,
) => {
    return await quickSort(array, 0, array.length - 1, setPivot, setArray, setTempIndex)
}

const partition = async (
    array: Array<number>,
    start: number,
    end: number,
    setPivot: (n: number) => void,
    setTempIndex: (n: number) => void,
    setArray: (a: Array<number>) => void,
): Promise<number> => {
    const copyArray = [...array]
    const pivot = copyArray[start]
    setPivot(start)
    let p1 = start + 1
    let temp

    for (let i = start + 1; i <= end; i++) {
        // await sleep()
        // setTempIndex(i)
        if (copyArray[i] < pivot) {
            if (i !== p1) {
                temp = copyArray[p1]
                copyArray[p1] = copyArray[i]
                copyArray[i] = temp
            }
            p1++
            // setPivot(p1)
        }
    }

    copyArray[start] = copyArray[p1 - 1]
    copyArray[p1 - 1] = pivot
    // setArray(copyArray)
    return p1 - 1
}

const quickSort = async (
    array: Array<number>,
    start: number,
    end: number,
    setPivot: (n: number) => void,
    setArray: (a: Array<number>) => void,
    setTempIndex: (n: number) => void,
): Promise<void> => {
    if (start < end) {
        const arrayCopy = [...array]
        setArray(arrayCopy)
        const p1 = await partition(array, start, end, setPivot, setTempIndex, setArray)
        setPivot(start)
        await sleep(2000)
        console.log(`piv = ${start} ${arrayCopy[start]}, ${arrayCopy}`)

        await quickSort(array, start, p1 - 1, setPivot, setArray, setTempIndex)
        await quickSort(array, p1 + 1, end, setPivot, setArray, setTempIndex)
    }
}
