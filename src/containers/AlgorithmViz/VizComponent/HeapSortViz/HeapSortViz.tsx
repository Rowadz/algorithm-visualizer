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
        <div style={{ width: nodeDatum.width || 90 }}>
          <h3 style={{ textAlign: 'center' }}>{nodeDatum.name}</h3>
        </div>
      </foreignObject>
    </g>
  )
}

const foreignObjectProps = { width: 500, height: 200, x: 20 }

const HeapSortViz: FC = () => {
  const [array, setArray] = useState<Array<number>>(factArr())
  const [started, setStarted] = useState<boolean>(false)
  const { saltBox, mulberry } = useCustomColors()
  const [tree, setTree] = useState<TreeState>({
    name: ``,
    children: [],
  })

  const startAlgo = async () => {
    setStarted(true)
    const data = await heapSort(array)
    console.log({ data, array })
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
      <Text fontSize="md">Sorting [{array.toString()}]</Text>
      <Tree
        translate={{ x: window.innerWidth / 4, y: 20 }}
        data={tree}
        renderCustomNodeElement={(rd3tProps) =>
          renderForeignObjectNode({
            ...rd3tProps,
            fillColor: saltBox,
            foreignObjectProps,
          })
        }
        pathClassFunc={() => styles.node__path}
        orientation="vertical"
      />
    </>
  )
}

export default memo(HeapSortViz)
