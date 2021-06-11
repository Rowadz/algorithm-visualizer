import { FC, memo } from 'react'
import { Flex, Heading, useTheme, Theme } from '@chakra-ui/react'

const AppHeader: FC = () => {
  const theme: Theme = useTheme()

  return (
    <Flex
      as="nav"
      flex="1"
      mb={4}
      padding="1rem"
      bg={theme.colors.purple[700]}
      color="white"
    >
      <Flex align="center">
        <Heading size="sm">TODO</Heading>
      </Flex>
    </Flex>
  )
}

export default memo(AppHeader)
