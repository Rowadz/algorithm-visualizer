import { FC, useCallback } from 'react'
import { Heading, Button } from '@chakra-ui/react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectAlgorithm } from './slice'
import { ALGORITHMS } from './enums'

const AlgorithmSelector: FC = () => {
  const dispatch = useAppDispatch()
  const selectAlgo = useCallback(() => {
    dispatch(selectAlgorithm(ALGORITHMS.LEVENSHTEIN_DISTANCE))
  }, [])

  return (
    <Button
      size="sm"
      colorScheme="red"
      borderRadius="full"
      height="10"
      onClick={selectAlgo}
      width="100%"
      bg="red.700"
    >
      <Heading size="sm" w="100%" color="white">
        levenshtein distance
      </Heading>
    </Button>
  )
}

export default AlgorithmSelector
