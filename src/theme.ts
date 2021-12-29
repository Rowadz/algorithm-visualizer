import { extendTheme, ThemeConfig, Theme } from '@chakra-ui/react'
import { AppColors } from 'app/const'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme: Theme = extendTheme({
  config,
  colors: {
    saltBox: '#705E78',
    mulberry: '#BF4594',
    persimmon: '#553c9a',
    tidal: '#F3FEB0',
    blueMarguerite: '#FFD432',
    valentino: '#8C3B70',
    perano: '#A2D4F2'
  } as AppColors,
})

export default theme
