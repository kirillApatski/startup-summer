import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authApi } from 'api/authApi'
import { setIsInitialized } from 'store/slices/appSlice'
import { setDataToLocalStorage } from 'utils/localStorage'

const initState = {
  access_token: '',
  refresh_token: '',
  ttl: 0,
  token_type: '',
  expires_in: 0
}
export const authMe = createAsyncThunk('auth/authMe', async (_, thunkAPI) => {
  try {
    const res = await authApi.passwordAuth()
    setAuthData(res.data)
    setDataToLocalStorage('auth', JSON.stringify(res.data))
  } catch (error) {
    thunkAPI.rejectWithValue(error)
  } finally {
    thunkAPI.dispatch(setIsInitialized({ isInitialized: false }))
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState: initState,
  reducers: {
    setAuthData(state, action: PayloadAction<any>) {
      debugger

      state.access_token = action.payload.access_token
      state.ttl = action.payload.ttl
      state.refresh_token = action.payload.refresh_token
      state.token_type = action.payload.token_type
      state.expires_in = action.payload.expires_in
    }
  }
})

export const authReducer = authSlice.reducer
export const { setAuthData } = authSlice.actions
