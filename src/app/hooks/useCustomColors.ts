import { useTheme, Theme } from '@chakra-ui/react'
import { AppColors } from 'app/const'

export const useCustomColors = () => {
  const { colors }: Theme = useTheme()
  const { saltBox, persimmon, tidal, mulberry, mediumRedViolet } = colors as unknown as AppColors
  return { saltBox, persimmon, tidal, mulberry, mediumRedViolet }
}
