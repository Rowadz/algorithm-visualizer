import { Colors } from '@chakra-ui/react'

export enum ALGOS {
  SELECTION_SORT = 'SELECTION_SORT',
  BUBBLE_SORT = 'BUBBLE_SORT',
  INSERTION_SORT = 'INSERTION_SORT',
  MERGE_SORT = 'MERGE_SORT',
}

export const DEFAULT_STEP_TIME = 1000

export interface AppColors extends Colors {
  [key: string]: string
}
