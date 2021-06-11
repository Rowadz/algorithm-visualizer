import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ALGOS } from 'const'

type ALGOState = ALGOS | null

const slice = createSlice({
  name: 'algorithm',
  initialState: null as ALGOState,
  reducers: {
    selectAlgorithm(_, { payload }: PayloadAction<ALGOS>) {
      return payload
    },
  },
})

export const { selectAlgorithm } = slice.actions

export default slice.reducer
