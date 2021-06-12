import { ALGOS } from 'const'
import { NamedExoticComponent } from 'react'
import { SelectionSortViz,insertionSort } from './VizComponent'

const map: Record<string, NamedExoticComponent> = Object.freeze({
  [ALGOS.SELECTION_SORT]: SelectionSortViz,
  [ALGOS.INSERTION_SORT]: insertionSort,
})

export default map
