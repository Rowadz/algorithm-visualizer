import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { AlgorithmReducer } from 'containers'

export const store = configureStore({
  reducer: {
    algorithm: AlgorithmReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
