import { ALGOS } from 'app/const'
import { NamedExoticComponent } from 'react'
import { SelectionSortViz, BubbleSortViz, MergeSortViz } from './VizComponent'

const map: Record<string, NamedExoticComponent> = Object.freeze({
  [ALGOS.SELECTION_SORT]: SelectionSortViz,
  [ALGOS.BUBBLE_SORT]: BubbleSortViz,
  [ALGOS.MERGE_SORT]: MergeSortViz,
})

export default map
