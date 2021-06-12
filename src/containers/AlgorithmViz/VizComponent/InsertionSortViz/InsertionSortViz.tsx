import { memo, FC, useState } from 'react'
import {
  Flex,
  Button,
  Box,
  Theme,
  useTheme,
  Divider,
  Text,
} from '@chakra-ui/react'
import { useSprings } from 'react-spring'
import { random } from 'lodash'
import { insertionSort } from './algo'
import { DEFAULT_STEP_TIME, AppColors } from 'const'
import InsertionSortElement from './InsertionSortElement'
import InsertionSortIterationData from './InsertionSortIterationData'

const array = Array.from({ length: 10 }).map(() => random(0, 100))

const SelectionSortViz: FC = () => {
  const [i, setI] = useState<number | null>(null)
  const [j, setJ] = useState<number | null>(null)
  const [minIdx, setMinIdx] = useState<number | null>(null)
  const [started, setStarted] = useState<boolean>(false)

  const { colors }: Theme = useTheme()
  const { saltBox, persimmon, tidal } = colors as unknown as AppColors

  const springs = useSprings(
    array.length,
    array.map((_, index) => ({
      backgroundColor: i === index || j === index ? saltBox : persimmon,
      color: '#F2F2F2',
      width: '10%',
      boxShadow: index === minIdx ? `5px 10px ${tidal}` : `0px 0px ${tidal}`,
      opacity: i === index ? 0.5 : 1,
      height: 60,
      from: { opacity: 0, height: 120 },
    }))
  )

  const startAlgo = async () => {
    setStarted(true)
    await insertionSort(array, setI, setJ, setMinIdx, DEFAULT_STEP_TIME)
    setI(null)
    setJ(null)
    setMinIdx(null)
    setStarted(false)
  }

  return (
    <>
      <Flex>
        <Button
          m="1rem"
          onClick={startAlgo}
          disabled={started}
          isLoading={started}
        >
          START!
        </Button>
      </Flex>
      <Flex fontWeight="bold" flexWrap="wrap">
        {springs.map((props: any, i) => {
          return (
            <InsertionSortElement key={i} style={props}>
              {array[i]}
            </InsertionSortElement>
          )
        })}
      </Flex>
      <Box hidden={i === null && j === null && minIdx === null}>
        <Divider />
        <Flex>
          <Text fontSize="4xl">Iteration data</Text>
        </Flex>
      </Box>
      <InsertionSortIterationData
        index={i}
        color={saltBox}
        array={array}
        text="i"
      />
      <InsertionSortIterationData
        index={j}
        color={saltBox}
        array={array}
        text="j"
      />
      <InsertionSortIterationData
        index={minIdx}
        color={tidal}
        array={array}
        text="current min index"
      />
    </>
  )
}

export default memo(SelectionSortViz)
