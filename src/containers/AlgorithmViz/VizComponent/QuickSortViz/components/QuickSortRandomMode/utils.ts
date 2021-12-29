import { useCustomColors } from 'app/hooks'
import { indexes } from './interfaces'

export const useGetColor = () => {
  const { persimmon, blueMarguerite, mulberry, valentino, perano } =
    useCustomColors()
  return (
    index: number,
    tempIndex: Partial<indexes>,
    pivot: number | null | undefined
  ): string => {
    if (
      (tempIndex.last === index && pivot === index) ||
      (tempIndex.first === index && pivot === index)
    ) {
      return valentino
    }
    switch (index) {
      case tempIndex.tempIndex: {
        return mulberry
      }
      case pivot: {
        return blueMarguerite
      }
      case tempIndex.last: {
        return perano
      }
      case tempIndex.first: {
        return perano
      }

      default:
        return persimmon
    }
  }
}
