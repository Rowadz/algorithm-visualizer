import { memo, FC } from 'react'
import { useSprings } from 'react-spring'
import { useCustomColors } from 'app/hooks'
import { factArr } from 'app/factories'

const array = factArr()

const BubbleSortViz: FC = () => {
  const { persimmon } = useCustomColors()

  const springs = useSprings(
    array.length,
    array.map((_, index) => ({
      backgroundColor: persimmon,
      color: '#F2F2F2',
      width: '10%',
      opacity: 1,
      height: 60,
      from: { opacity: 0, height: 120 },
    }))
  )

  return <div>2</div>
}

export default memo(BubbleSortViz)
