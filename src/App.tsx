import { FC } from 'react'
import { ChakraProvider, Box, Flex } from '@chakra-ui/react'
import { AlgorithmSelector, AlgorithmViz } from 'containers'
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
        <Box h="100%" w={['100%', '100%', '75%', '75%']}>
          <AlgorithmViz />
        </Box>
      </Flex>
    </ChakraProvider>
  )
}

export default App
