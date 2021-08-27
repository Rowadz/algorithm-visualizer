import { memo, FC } from 'react'
import { Flex, Button, Text, Badge, Box } from '@chakra-ui/react'
import { ModeSelector } from './components'

const QuickSortViz: FC = () => {
  return (
    <>
      <Flex>
        <Button mt="1rem" mb="1rem">
          START!
        </Button>
      </Flex>
      <Flex fontWeight="bold" flexWrap="wrap">
        <Text fontSize="xs">
          Like <Badge>Merge Sort</Badge>, QuickSort is a Divide and Conquer
          algorithm. It picks an element as pivot and partitions the given array
          around the picked pivot. There are many different versions of
          quickSort that pick pivot in different ways.
        </Text>
      </Flex>
      <Box mt="1rem">
        <ModeSelector />
      </Box>
    </>
  )
}

export default memo(QuickSortViz)
