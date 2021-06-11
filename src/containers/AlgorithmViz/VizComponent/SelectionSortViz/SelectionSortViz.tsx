import { memo, FC, useState } from 'react'
import { Flex, Button } from '@chakra-ui/react'
import { useSprings } from 'react-spring'
import { random } from 'lodash'
import { selectionSort } from './algo'
import SelectionSortElement from './SelectionSortElement'

const array = Array.from({ length: 10 }).map(() => random(0, 100))

const SelectionSortViz: FC = () => {
  const [i, setI] = useState<number | null>(null)
  const [j, setJ] = useState<number | null>(null)
  const [minIdx, setMinIdx] = useState<number | null>(null)

  const springs = useSprings(
    array.length,
    array.map((_, index) => ({
      backgroundColor: i === index || j === index ? '#705E78' : '#ff665a',
      color: '#F2F2F2',
      width: '10%',
      boxShadow: index === minIdx ? '5px 10px #F3FEB0' : '0px 0px #F3FEB0',
      opacity: i === index ? 0.5 : 1,
      height: 60,
      from: { opacity: 0, height: 120 },
    }))
  )

  const startAlgo = async () => {
    await selectionSort(array, setI, setJ, setMinIdx, 100)
    setI(null)
    setJ(null)
    setMinIdx(null)
  }

  return (
    <>
      <Flex>
        <Button m="1rem" onClick={startAlgo}>
          START!
        </Button>
      </Flex>
      <Flex fontWeight="bold" flexWrap="wrap">
        {springs.map((props: any, i) => {
          return (
            <SelectionSortElement key={i} style={props}>
              {array[i]}
            </SelectionSortElement>
          )
        })}
      </Flex>
    </>
  )
}

export default memo(SelectionSortViz)
