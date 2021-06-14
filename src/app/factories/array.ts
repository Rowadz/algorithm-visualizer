import { random } from 'lodash'

export const factArr = (length = 10) =>
  Array.from({ length }).map(() => random(-10, 100))
