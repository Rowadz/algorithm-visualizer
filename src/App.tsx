import { FC } from 'react'
import { ChakraProvider, Box, Flex } from '@chakra-ui/react'
import { AlgorithmSelector, AlgorithmViz } from 'containers'
import { AppHeader } from 'dump'
import theme from './theme'

const App: FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <AppHeader />
      <Flex height="100vh" flexDir={['column', 'column', 'row', 'row']}>
        <Box
          h={['auto', 'auto', '25%', '25%']}
          w={['100%', '100%', '25%', '25%']}
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
