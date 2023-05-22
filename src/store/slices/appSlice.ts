import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type InitialStateType = {
  status: RequestStatusType
  error: string | null
  isInitialized: boolean
}

const initialState: InitialStateType = {
  isInitialized: true,
  status: 'idle',
  error: null
}

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    setAppStatus(state, action: PayloadAction<{ status: RequestStatusType }>) {
      state.status = action.payload.status
    },
    setIsInitialized(state, action: PayloadAction<{ isInitialized: boolean }>) {
      state.isInitialized = action.payload.isInitialized
    }
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        action => {
          return action.type.endsWith('/pending')
        },
        state => {
          state.status = 'loading'
        }
      )
      .addMatcher(
        action => {
          return action.type.endsWith('/fulfilled')
        },
        state => {
          state.status = 'succeeded'
        }
      )
  }
})

export const { setIsInitialized } = appSlice.actions
export const appReducer = appSlice.reducer
