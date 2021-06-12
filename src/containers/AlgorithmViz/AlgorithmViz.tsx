import { memo, FC } from 'react'
import { ALGOS } from 'app/const'
import { useAppSelector } from 'app/hooks'
import { Box } from '@chakra-ui/react'
import { selectSelectedAlgo } from 'app/selectors'
import vizMap from './vizMap'

const AlgorithmViz: FC = () => {
  const selected: ALGOS | null = useAppSelector(selectSelectedAlgo)
  if (selected === null || !vizMap[selected]) {
    return null
  }

  const VIZ = vizMap[selected]

  return (
    <Box m="1rem">
      <VIZ />
    </Box>
  )
}

export default memo(AlgorithmViz)
