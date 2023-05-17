import { createSlice } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from 'utils/create-app-async-thunk'
import { cataloguesApi, CataloguesType } from 'api/cataloguesApi'

export const getCatalogues = createAppAsyncThunk('catalogues/getCatalogues', async (_, { rejectWithValue }) => {
  try {
    const res = await cataloguesApi.getCatalogues()
    return res.data
  } catch (error) {
    return rejectWithValue(error)
  }
})

const cataloguesSlice = createSlice({
  name: 'catalogues',
  initialState: [] as CataloguesType[],
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCatalogues.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

export const cataloguesReducer = cataloguesSlice.reducer
