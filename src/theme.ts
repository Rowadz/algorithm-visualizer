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
    persimmon: '#FF665A',
    tidal: '#F3FEB0',
    mediumRedViolet: '#C82C8D',
  } as AppColors,
})

export default theme
