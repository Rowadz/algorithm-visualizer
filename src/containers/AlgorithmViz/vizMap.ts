import { ALGOS } from 'app/const'
import { NamedExoticComponent } from 'react'
import {
  SelectionSortViz,
  BubbleSortViz,
  MergeSortViz,
  insertionSort,
  QuickSortViz,
  HeapSortViz,
} from './VizComponent'

const map: Record<string, NamedExoticComponent> = Object.freeze({
  [ALGOS.SELECTION_SORT]: SelectionSortViz,
  [ALGOS.BUBBLE_SORT]: BubbleSortViz,
  [ALGOS.MERGE_SORT]: MergeSortViz,
  [ALGOS.INSERTION_SORT]: insertionSort,
  [ALGOS.QUICK_SORT]: QuickSortViz,
  [ALGOS.HEAP_SORT]: HeapSortViz,
})

export default map
