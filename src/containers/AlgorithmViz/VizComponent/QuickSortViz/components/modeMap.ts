import { NamedExoticComponent } from 'react'
import { QuickSortModes } from './types'
import { QuickSortRandomMode } from './QuickSortRandomMode'

export const modeMap: Record<QuickSortModes, NamedExoticComponent> =
  Object.freeze({ random: QuickSortRandomMode })
