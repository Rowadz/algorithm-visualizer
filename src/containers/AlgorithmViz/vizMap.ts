import { ALGOS } from 'const'
import { NamedExoticComponent } from 'react'
import { SelectionSortViz } from './VizComponent'

const map: Record<string, NamedExoticComponent> = Object.freeze({
  [ALGOS.SELECTION_SORT]: SelectionSortViz,
})

export default map
