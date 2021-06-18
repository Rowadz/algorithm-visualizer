import { FC, memo } from 'react'
import { Flex, Heading, useTheme, Theme, IconButton } from '@chakra-ui/react'
import { SunIcon } from '@chakra-ui/icons'

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
      <Flex flex={1} />
      <IconButton
        variant="outline"
        aria-label="Theme changer"
        fontSize="20px"
        icon={<SunIcon />}
      />
    </Flex>
  )
}

export default memo(AppHeader)
