import { FC, memo, useState, useMemo } from 'react'
import { Flex, Radio, RadioGroup, Badge } from '@chakra-ui/react'
import { QuickSortModes } from './types'
import { modeMap } from './modeMap'

const ModeSelector: FC = () => {
  const [mode, setMode] = useState<QuickSortModes>('first')
  const ModeComponent: FC = useMemo(() => modeMap[mode], [mode])

  return (
    <>
      <Flex flexWrap="wrap" w="100%">
        <RadioGroup colorScheme="purple" onChange={setMode} value={mode}>
          <Radio value="first" ml="0.5rem" mr="0.5rem">
            Always pick the <Badge>first</Badge> element as pivot
          </Radio>
          <Radio value="last" ml="0.5rem" mr="0.5rem">
            Always pick the <Badge>last</Badge> element as pivot
          </Radio>
          <Radio value="random" ml="0.5rem" mr="0.5rem">
            Pick a <Badge>random</Badge> element as pivot
          </Radio>
          <Radio value="median" ml="0.5rem" mr="0.5rem">
            Pick <Badge>median</Badge> as pivot
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
