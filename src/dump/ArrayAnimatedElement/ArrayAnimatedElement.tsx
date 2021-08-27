import { animated } from 'react-spring'
import styled from '@emotion/styled'
import { Flex } from '@chakra-ui/react'

const ArrayAnimatedElement = styled(animated(Flex))`
  cursor: pointer;
`

ArrayAnimatedElement.defaultProps = {
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  textAlign: 'center',
  margin: '1rem',
  fontSize: [20, 40, 40, 40],
}

export default ArrayAnimatedElement
