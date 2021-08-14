import { memo, useState } from 'react'
import { useCustomColors } from 'app/hooks'
import Tree from 'react-d3-tree'
import { Button, Text } from '@chakra-ui/react'
import { mergeSort } from './algo'
import { factArr } from 'app/factories'
import styles from './MergeSortViz.module.css'
import { TreeState } from './types'

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

const MergeSortViz = () => {
  const [array] = useState<Array<number>>(factArr(10))
  const [started, setStarted] = useState<boolean>(false)
  const [tree, setTree] = useState<TreeState>({
    name: `[${[...array].toString()}]`,
    children: [],
  })
  const { saltBox, mulberry } = useCustomColors()

  const startAlgo = async () => {
    setTree({
      name: `[${[...array].toString()}]`,
      children: [],
    })
    setStarted(true)
    await mergeSort(array, setTree, mulberry)
    setStarted(false)
  }

  const foreignObjectProps = { width: 500, height: 200, x: 20 }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Button onClick={startAlgo} isLoading={started}>
        START!
      </Button>
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
    </div>
  )
}

export default memo(MergeSortViz)
