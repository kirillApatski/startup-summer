import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getVacancies } from 'store/slices/vacanciesSlice'

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
    builder.addCase(getVacancies.pending, state => {
      state.status = 'loading'
    })
    builder.addCase(getVacancies.fulfilled, state => {
      state.status = 'succeeded'
    })
    builder.addCase(getVacancies.rejected, (state, action) => {
      if (action.error.message) state.error = action.error.message
      state.status = 'failed'
    })
  }
})

export const { setIsInitialized } = appSlice.actions
export const appReducer = appSlice.reducer
