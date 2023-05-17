import { createSlice } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from 'utils/create-app-async-thunk'
import { FilterAndSearchType, vacanciesApi, VacanciesResponseType } from 'api/vacanciesApi'

const initialState: VacanciesResponseType & FilterAndSearchType = {
  objects: [],
  total: 0,
  count: 4,
  filterAndSearch: {
    published: 1,
    keyword: null,
    payment_from: null,
    payment_to: null,
    catalogues: null
  }
}

export const getVacancies = createAppAsyncThunk(
  'vacancies/getVacancies',
  async (currenPage: number, { rejectWithValue }) => {
    try {
      const res = await vacanciesApi.getVacancies(currenPage)
      return res.data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getVacancies.fulfilled, (state, action) => {
      state.objects = action.payload.objects
      state.total = action.payload.total
    })
  }
})

export const vacanciesReducer = vacanciesSlice.reducer
