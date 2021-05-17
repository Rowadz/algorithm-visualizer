import { FC } from 'react'
import { ChakraProvider, Box, Flex, Heading, Button } from '@chakra-ui/react'
import { AlgorithmSelector } from 'containers'
import { AppHeader } from 'dump'
import theme from './theme'

const App: FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <AppHeader />
      <Flex height="100vh" flexDir={['column', 'row', 'row', 'row']}>
        <Box
          h="100%"
          w="25%"
          display={['none', 'none', 'inherit', 'inherit']}
          p=".5rem"
        >
          <AlgorithmSelector />
        </Box>
        <Box h="100%" w="75%" />
      </Flex>
    </ChakraProvider>
  )
}

export default App
