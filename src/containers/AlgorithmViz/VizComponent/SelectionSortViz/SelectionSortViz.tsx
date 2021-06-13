import { memo, FC, useState } from 'react'
import { Flex, Button, Box, Divider, Text } from '@chakra-ui/react'
import { useSprings } from 'react-spring'
import { factArr } from 'app/factories'
import { useCustomColors } from 'app/hooks'
import { selectionSort } from './algo'
import { ArrayAnimatedElement } from 'dump'
import SelectionSortIterationData from './SelectionSortIterationData'

const SelectionSortViz: FC = () => {
  const [array, setArray] = useState<Array<number>>(factArr())
  const [i, setI] = useState<number | null>(null)
  const [j, setJ] = useState<number | null>(null)
  const [minIdx, setMinIdx] = useState<number | null>(null)
  const [started, setStarted] = useState<boolean>(false)
  const { saltBox, persimmon, tidal } = useCustomColors()

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
    await selectionSort(array, setI, setJ, setMinIdx, setArray)
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
            <ArrayAnimatedElement key={i} style={props}>
              {array[i]}
            </ArrayAnimatedElement>
          )
        })}
      </Flex>
      <Box hidden={i === null && j === null && minIdx === null}>
        <Divider />
        <Flex>
          <Text fontSize="4xl">Iteration data</Text>
        </Flex>
      </Box>
      <SelectionSortIterationData
        index={i}
        color={saltBox}
        array={array}
        text="i"
      />
      <SelectionSortIterationData
        index={j}
        color={saltBox}
        array={array}
        text="j"
      />
      <SelectionSortIterationData
        index={minIdx}
        color={tidal}
        array={array}
        text="current min index"
      />
    </>
  )
}

export default memo(SelectionSortViz)
