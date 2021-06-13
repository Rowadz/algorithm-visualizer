import { useCustomColors } from 'app/hooks'
import { memo } from 'react'
import Tree from 'react-d3-tree'
import styles from './MergeSortViz.module.css'

const orgChart = {
  name: '[1, 2 ,3, 5]',
  children: [
    {
      name: '[1, 2]',
      children: [
        {
          name: '[3,5]',
          children: [{ name: '[1,2,3,5]' }],
        },
        {
          name: '[1,2,3,5]',
          children: [{ name: '[1,2,3,5]' }],
        },
      ],
    },
  ],
}

const renderForeignObjectNode = ({
  nodeDatum,
  fillColor,
  foreignObjectProps,
}: any) => (
  <g>
    <circle r={15} style={{ fill: fillColor }}></circle>
    <foreignObject {...foreignObjectProps}>
      <div style={{ border: '1px solid black' }}>
        <h3 style={{ textAlign: 'center' }}>
          <pre>{JSON.stringify(nodeDatum.name, null, 4)}</pre>
        </h3>
      </div>
    </foreignObject>
  </g>
)

const MergeSortViz = () => {
  const { saltBox } = useCustomColors()
  const foreignObjectProps = { width: 200, height: 200, x: 20 }

  return (
    <div style={{ width: '50rem', height: '100vh' }}>
      <Tree
        translate={{ x: window.innerWidth / 4, y: 20 }}
        data={orgChart}
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
