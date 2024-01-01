import { memo, FC, useState } from 'react'
import { Flex, Button, Text } from '@chakra-ui/react'
import Tree from 'react-d3-tree'
import { factArr } from 'app/factories'
import { heapSort } from './algo'
import { useCustomColors } from 'app/hooks'
import styles from './MergeSortViz.module.css'
import { TreeState } from '../MergeSortViz/types'

const renderForeignObjectNode = ({
  nodeDatum,
  fillColor,
  foreignObjectProps,
}: any) => {
  return (
    <g>
      <circle r={15} style={{ fill: nodeDatum.color || fillColor }}></circle>
      <foreignObject {...foreignObjectProps}>
        <div style={{ width: 30 }}>
          <h3 style={{ textAlign: 'center' }}>{nodeDatum.name}</h3>
        </div>
      </foreignObject>
    </g>
  )
}

const foreignObjectProps = { width: 4500, height: 200, x: 20 }

const HeapSortViz: FC = () => {
  const [array] = useState<Array<number>>(factArr())
  const [started, setStarted] = useState<boolean>(false)
  const [sortedArr, setSortedArr] = useState<Array<number>>([])
  const { saltBox, mulberry } = useCustomColors()
  const [tree, setTree] = useState<TreeState>({
    name: ``,
    children: [],
  })

  const startAlgo = async () => {
    setStarted(true)
    const data = await heapSort(array, setTree)
    setSortedArr(data)
    setStarted(false)
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
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
      <Text fontSize="md">Sorting [{array.toString()}]</Text>
      {!!sortedArr.length && (
        <Text fontSize="md">Sorted [{sortedArr.toString()}]</Text>
      )}
      <Tree
        translate={{ x: window.innerWidth / 4, y: 20 }}
        data={tree}
        renderCustomNodeElement={(rd3tProps) =>
          renderForeignObjectNode({
            ...rd3tProps,
            fillColor: mulberry,
            foreignObjectProps,
          })
        }
        pathClassFunc={() => styles.node__path}
        orientation="vertical"
      />
    </div>
  )
}

export default memo(HeapSortViz)
