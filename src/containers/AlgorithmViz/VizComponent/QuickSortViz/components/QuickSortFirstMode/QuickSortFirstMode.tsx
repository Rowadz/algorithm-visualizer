import { memo, FC, useState } from 'react'
import { Button, Text, Flex } from '@chakra-ui/react'
import { useSprings } from 'react-spring'
import { factArr } from 'app/factories'
import { useCustomColors, useSpringBoxHeight } from 'app/hooks'
import { quickSortFirstMode } from './algo'
import { ArrayAnimatedElement } from 'dump'

const arr = factArr(10)

const QuickSortFirstMode: FC = () => {
  const [array, setArray] = useState<Array<number>>([...arr])
  const [pivot, setPivot] = useState<number | null>()
  const [tempIndex, setTempIndex] = useState<number | null>()
  const [started, setStarted] = useState<boolean>(false)
  const { saltBox, persimmon, blueMarguerite, mulberry } = useCustomColors()
  const boxHeight = useSpringBoxHeight()

  const springs = useSprings(
    array.length,
    array.map((_, index) => ({
      backgroundColor:
        index === tempIndex
          ? mulberry
          : pivot === index
          ? blueMarguerite
          : persimmon,
      color: '#F2F2F2',
      width: '10%',
      boxShadow:
        pivot === index || index === tempIndex
          ? `0px 0px ${saltBox}`
          : `5px 10px ${saltBox}`,
      opacity: 1,
      height: boxHeight,
      from: { opacity: 0, height: 12 },
    }))
  )

  const startAlgo = async () => {
    setStarted(true)
    const copy = [...array]
    await quickSortFirstMode(copy, setPivot, setArray, setTempIndex)
    console.log({ copy })
    setStarted(false)
    setPivot(null)
    setTempIndex(null)
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Button onClick={startAlgo} isLoading={started}>
        START!
      </Button>
      <Text fontSize="md" mt="0.5rem">
        Sorting [{arr.toString()}]
      </Text>
      <Flex fontWeight="bold" flexWrap="wrap">
        {springs.map((props: any, i) => {
          return (
            <ArrayAnimatedElement key={i} style={props}>
              {array[i]}
            </ArrayAnimatedElement>
          )
        })}
      </Flex>
    </div>
  )
}

export default memo(QuickSortFirstMode)
