import { NamedExoticComponent } from 'react'
import { QuickSortModes } from './types'
import {
  QuickSortFirstMode,
  QuickSortLastMode,
  QuickSortRandomMode,
  QuickSortMedianMode,
} from '.'

export const modeMap: Record<QuickSortModes, NamedExoticComponent> =
  Object.freeze({
    first: QuickSortFirstMode,
    last: QuickSortLastMode,
    random: QuickSortRandomMode,
    median: QuickSortMedianMode,
  })
