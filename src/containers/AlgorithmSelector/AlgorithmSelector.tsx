import { FC, memo } from 'react'
import { Text, Button } from '@chakra-ui/react'
import { useAppSelector, useAppDispatch, useCustomColors } from 'app/hooks'
import { ALGOS } from 'app/const'
import { selectSelectedAlgo } from 'app/selectors'
import { startCase } from 'lodash'
import { selectAlgorithm } from './slice'

const keys = Object.keys(ALGOS)

const AlgorithmSelector: FC = () => {
  const dispatch = useAppDispatch()
  const selected: ALGOS | null = useAppSelector(selectSelectedAlgo)
  const { mediumRedViolet } = useCustomColors()

  return (
    <section>
      {keys.map((algo: string) => (
        <Button
          key={algo}
          size="sm"
          disabled={selected === algo}
          colorScheme="purple"
          borderTopWidth={selected === algo ? 5 : 0}
          borderBottomWidth={selected === algo ? 0 : 5}
          borderStyle="solid"
          borderColor={mediumRedViolet}
          borderTopStyle="solid"
          w={['25%', '25%', '25%', '25%']}
          h={10}
          p={[0, 10, 10, 10]}
          m={[1, 5, 5, 5]}
          textOverflow="clip"
          whiteSpace="break-spaces"
          onClick={() =>
            dispatch(selectAlgorithm((ALGOS as any)[algo] as ALGOS))
          }
          bg={selected === algo ? 'purple.900' : 'purple.700'}
        >
          <Text fontSize="xs" color="white" textOverflow="clip">
            {startCase(algo.toLowerCase())}
          </Text>
        </Button>
      ))}
    </section>
  )
}

export default memo(AlgorithmSelector)
