import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authApi, AuthResponseType } from 'api/authApi'
import { setIsInitialized } from 'store/slices/appSlice'
import { setDataToLocalStorage } from 'utils/localStorage'
import { createAppAsyncThunk } from 'utils/create-app-async-thunk'

const initState = {
  access_token: '',
  refresh_token: '',
  ttl: 0,
  token_type: '',
  expires_in: 0
}
const accessToken = localStorage.getItem('auth') && JSON.parse(localStorage.getItem('auth') || '').access_token
const refreshToken = localStorage.getItem('auth') && JSON.parse(localStorage.getItem('auth') || '').refresh_token
const ttl = localStorage.getItem('auth') && JSON.parse(localStorage.getItem('auth') || '').ttl

export const authMe = createAppAsyncThunk('auth/authMe', async (_, { dispatch, rejectWithValue }) => {
  try {
    if (!accessToken) {
      const res = await authApi.passwordAuth()
      dispatch(setAuthData(res.data))
      setDataToLocalStorage('auth', JSON.stringify(res.data))
    } else if (ttl * 1000 < Date.now()) {
      dispatch(setIsInitialized({ isInitialized: true }))
      dispatch(authRefreshToken(refreshToken))
    }
  } catch (error) {
    return rejectWithValue(error)
  } finally {
    dispatch(setIsInitialized({ isInitialized: false }))
  }
})

export const authRefreshToken = createAppAsyncThunk(
  'auth/authRefreshToken',
  async (refreshToken: string, { dispatch, rejectWithValue }) => {
    try {
      const res = await authApi.refreshToken(refreshToken)
      dispatch(setAuthData(res.data))
    } catch (error) {
      return rejectWithValue(error)
    } finally {
      dispatch(setIsInitialized({ isInitialized: false }))
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: initState,
  reducers: {
    setAuthData(state, action: PayloadAction<AuthResponseType>) {
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
