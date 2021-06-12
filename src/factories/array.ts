import { random } from 'lodash'

export const factArr = () =>
  Array.from({ length: 10 }).map(() => random(-10, 100))
