import { memo, FC } from 'react'
import { ALGOS } from 'const'
import { useAppSelector } from 'app/hooks'
import { selectSelectedAlgo } from 'app/selectors'
import vizMap from './vizMap'

const AlgorithmViz: FC = () => {
  const selected: ALGOS | null = useAppSelector(selectSelectedAlgo)
  if (selected === null || !vizMap[selected]) {
    return null
  }

  const VIZ = vizMap[selected]

  return (
    <>
      <VIZ />
    </>
  )
}

export default memo(AlgorithmViz)
