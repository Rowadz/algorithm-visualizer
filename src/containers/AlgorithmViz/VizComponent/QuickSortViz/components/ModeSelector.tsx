import { FC, memo, useState, useMemo } from 'react'
import { Flex, Radio, RadioGroup, Badge } from '@chakra-ui/react'
import { QuickSortModes } from './types'
import { modeMap } from './modeMap'

const ModeSelector: FC = () => {
  const [mode, setMode] = useState<QuickSortModes>('random')
  const ModeComponent: FC = useMemo(() => modeMap[mode], [mode])

  return (
    <>
      <Flex flexWrap="wrap" w="100%">
        <RadioGroup colorScheme="purple" onChange={setMode} value={mode}>
          <Radio value="random" ml="0.5rem" mr="0.5rem">
            Pick a <Badge>random</Badge> element as pivot
          </Radio>
        </RadioGroup>
      </Flex>

      <Flex mt="1rem">
        <ModeComponent />
      </Flex>
    </>
  )
}

export default memo(ModeSelector)
