import { extendTheme, ThemeConfig, Theme } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme: Theme = extendTheme({ config })

export default theme
