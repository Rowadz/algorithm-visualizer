import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ALGORITHMS } from './enums'

type InitialState = ALGORITHMS | null

const slice = createSlice({
  name: 'algorithm',
  initialState: null as InitialState,
  reducers: {
    selectAlgorithm(_, { payload }: PayloadAction<ALGORITHMS>) {
      return payload
    },
  },
})

export const { selectAlgorithm } = slice.actions

export default slice.reducer
