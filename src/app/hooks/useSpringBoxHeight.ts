import { useIsSmallScreen } from './useIsSmallScreen'

export const useSpringBoxHeight = (): number => (useIsSmallScreen() ? 30 : 60)
