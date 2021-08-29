import { NamedExoticComponent } from 'react'
import { QuickSortModes } from './types'
import { QuickSortFirstMode } from './QuickSortFirstMode'
import { QuickSortLastMode } from './QuickSortLastMode'
import { QuickSortRandomMode } from './QuickSortRandomMode'
import { QuickSortMedianMode } from './QuickSortMedianMode'

export const modeMap: Record<QuickSortModes, NamedExoticComponent> =
  Object.freeze({
    first: QuickSortFirstMode,
    last: QuickSortLastMode,
    random: QuickSortRandomMode,
    median: QuickSortMedianMode,
  })
