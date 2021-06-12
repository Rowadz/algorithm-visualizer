import { RootState } from './store'
import { ALGOS } from 'app/const'

export const selectSelectedAlgo = ({ algorithm }: RootState): ALGOS | null =>
  algorithm
