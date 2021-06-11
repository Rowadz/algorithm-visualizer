import { RootState } from './store'
import { ALGOS } from 'const'

export const selectSelectedAlgo = ({ algorithm }: RootState): ALGOS | null =>
  algorithm
