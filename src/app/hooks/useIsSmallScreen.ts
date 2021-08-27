import { useMediaQuery } from '@chakra-ui/react'

export const useIsSmallScreen = () => {
  const [isSmallScreen] = useMediaQuery('(max-width: 600px)')
  return isSmallScreen
}
