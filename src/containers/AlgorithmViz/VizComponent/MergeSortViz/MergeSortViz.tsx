import { memo, useState } from 'react'
import { useCustomColors } from 'app/hooks'
import Tree from 'react-d3-tree'
import { Button } from '@chakra-ui/react'
import { mergeSort } from './algo'
import styles from './MergeSortViz.module.css'
import { factArr } from 'app/factories'

const renderForeignObjectNode = ({
  nodeDatum,
  fillColor,
  foreignObjectProps,
}: any) => {
  return (
    <g>
      <circle r={15} style={{ fill: nodeDatum.color || fillColor }}></circle>
      <foreignObject {...foreignObjectProps}>
        <div style={{ width: 90 }}>
          <h3 style={{ textAlign: 'center' }}>{nodeDatum.name}</h3>
        </div>
      </foreignObject>
    </g>
  )
}

const MergeSortViz = () => {
  const [array, setArray] = useState<Array<number>>(factArr(10))
  const [started, setStarted] = useState<boolean>(false)
  const [tree, setTree] = useState({
    name: `[${array.toString()}]`,
    children: [],
  })

  const startAlgo = async () => {
    setStarted(true)
    await mergeSort(array, setTree)
    setStarted(false)
  }

  const { saltBox } = useCustomColors()
  const foreignObjectProps = { width: 500, height: 200, x: 20 }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Button onClick={startAlgo} isLoading={started}>
        START!
      </Button>
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
