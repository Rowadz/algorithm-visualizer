import { memo } from 'react'
import styled from '@emotion/styled'
import { Flex } from '@chakra-ui/react'

const CenteredFlexBox = styled(Flex)``

CenteredFlexBox.defaultProps = {
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
}

export default memo(CenteredFlexBox)
