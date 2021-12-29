import { memo, FC, useState } from 'react'
import { Button, Text, Flex } from '@chakra-ui/react'
import { useSprings } from 'react-spring'
import { factArr } from 'app/factories'
import { useCustomColors, useSpringBoxHeight } from 'app/hooks'
import { quickSortRandomMode } from './algo'
import { indexes } from './interfaces'
import { useGetColor } from './utils'
import { ArrayAnimatedElement, ArrayIterationData } from 'dump'

const arr = factArr(10)

const QuickSortFirstMode: FC = () => {
  const [array, setArray] = useState<Array<number>>([...arr])
  const [pivot, setPivot] = useState<number | null>()
  const [indexesObj, setIndexesObj] = useState<Partial<indexes>>({})
  const [started, setStarted] = useState<boolean>(false)
  const { saltBox } = useCustomColors()
  const getColor = useGetColor()
  const { blueMarguerite, valentino, perano } = useCustomColors()
  const boxHeight = useSpringBoxHeight()

  const springs = useSprings(
    array.length,
    array.map((_, index) => ({
      backgroundColor: getColor(index, indexesObj, pivot),
      color: '#F2F2F2',
      width: '10%',
      boxShadow:
        pivot === index || index === indexesObj.first
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
    await quickSortRandomMode(copy, setPivot, setArray, setIndexesObj)
    setStarted(false)
    setPivot(null)
    setIndexesObj({})
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
      {started && (
        <>
          {pivot === indexesObj.last || indexesObj.first === pivot ? (
            <ArrayIterationData
              index={pivot as number}
              color={valentino}
              array={array}
              text="The pivot is equal the first/last index in the partition"
            />
          ) : (
            <ArrayIterationData
              index={pivot as number}
              color={blueMarguerite}
              array={array}
              text="pivot"
            />
          )}
          <ArrayIterationData
            index={indexesObj.first as number}
            color={perano}
            array={array}
            text="first index in partition"
          />
          <ArrayIterationData
            index={indexesObj.last as number}
            color={perano}
            array={array}
            text="last index in partition"
          />
        </>
      )}
    </div>
  )
}

export default memo(QuickSortFirstMode)
