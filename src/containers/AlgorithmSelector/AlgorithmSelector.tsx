import { FC, useCallback, memo } from 'react'
import { Heading, Button } from '@chakra-ui/react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { ALGOS } from 'const'
import { selectSelectedAlgo } from 'app/selectors'
import { startCase } from 'lodash'
import { selectAlgorithm } from './slice'

const keys = Object.keys(ALGOS)

const AlgorithmSelector: FC = () => {
  const dispatch = useAppDispatch()

  const selected: ALGOS | null = useAppSelector(selectSelectedAlgo)

  const selectAlgo = useCallback((algo: string) => {
    dispatch(selectAlgorithm((ALGOS as any)[algo] as ALGOS))
  }, [dispatch])

  return (
    <section>
      {keys.map((algo: string) => (
        <Button
          key={algo}
          size="sm"
          disabled={selected === algo}
          colorScheme="purple"
          borderRadius="full"
          height="10"
          padding="5"
          m="5"
          onClick={() => selectAlgo(algo)}
          width="75%"
          bg={selected === algo ? 'purple.900' : 'purple.700'}
        >
          <Heading size="sm" w="100%" color="white">
            {startCase(algo)}
          </Heading>
        </Button>
      ))}
    </section>
  )
}

export default memo(AlgorithmSelector)
