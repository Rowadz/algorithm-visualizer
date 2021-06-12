import { animated } from 'react-spring'
import styled from '@emotion/styled'
import { Flex } from '@chakra-ui/react'

const SelectionSortElement = styled(animated(Flex))`
  cursor: pointer;
`

SelectionSortElement.defaultProps = {
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  textAlign: 'center',
  height: 60,
  margin: '1rem',
  fontSize: 40,
}

export default SelectionSortElement
