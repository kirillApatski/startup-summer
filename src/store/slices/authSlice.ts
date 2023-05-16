import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initState: any = {
  access_token: '',
  refresh_token: '',
  ttl: 0,
  token_type: '',
  expires_in: 0
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initState,
  reducers: {
    setAuthData(state, action: PayloadAction<any>) {
      state.access_token = action.payload.access_token
      state.ttl = action.payload.ttl
      state.refresh_token = action.payload.refresh_token
      state.token_type = action.payload.token_type
      state.expires_in = action.payload.expires_in
    }
  }
})
