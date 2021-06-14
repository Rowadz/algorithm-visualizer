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
}: any) => (
  <g>
    <circle r={15} style={{ fill: fillColor }}></circle>
    <foreignObject {...foreignObjectProps}>
      <div style={{ border: '1px solid black', width: 200 }}>
        <h3 style={{ textAlign: 'center' }}>
          <pre>{JSON.stringify(nodeDatum.name, null, 4)}</pre>
        </h3>
      </div>
    </foreignObject>
  </g>
)

const MergeSortViz = () => {
  const [array, setArray] = useState<Array<number>>(factArr(10))
  const [tree, setTree] = useState({
    name: `[${array.toString()}]`,
    children: [],
  })

  const startAlgo = async () => {
    await mergeSort(array, setTree)
  }

  console.log({ tree })

  const { saltBox } = useCustomColors()
  const foreignObjectProps = { width: 500, height: 200, x: 20 }

  return (
    <div style={{ width: '50rem', height: '100vh' }}>
      <Button onClick={startAlgo}>START!</Button>
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
