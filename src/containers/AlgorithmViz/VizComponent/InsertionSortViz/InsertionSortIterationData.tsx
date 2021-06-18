import { memo } from 'react'
import { Flex, Tag, Kbd } from '@chakra-ui/react'
import { CenteredFlexBox } from 'dump'

interface Props {
  index: number | null
  array: Array<number>
  color: string
  text: string
}

const InsertionSortIterationData = ({ index, array, color, text }: Props) => {
  return (
    <Flex m="1rem" hidden={index === null}>
      <CenteredFlexBox>
        <Tag size="sm" variant="solid" bg={color} mr="2" />
        <Kbd>{text}</Kbd> = <Kbd>{index}</Kbd>
        <Kbd m="2">value</Kbd> =
        <Kbd m="2">[{index === null ? '' : array[index]}]</Kbd>
      </CenteredFlexBox>
    </Flex>
  )
}

export default memo(InsertionSortIterationData)
