import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from 'utils/create-app-async-thunk'
import { FilterAndSearchType, vacanciesApi, VacanciesResponseType } from 'api/vacanciesApi'

const initialState: VacanciesResponseType & FilterAndSearchType = {
  objects: [],
  total: 0,
  count: 4,
  published: 1,
  page: null,
  keyword: null,
  payment_from: null,
  payment_to: null,
  catalogues: null
}

export const getVacancies = createAppAsyncThunk('vacancies/getVacancies', async (_, { rejectWithValue, getState }) => {
  try {
    const { count, published, page, keyword, payment_to, payment_from, catalogues } = getState().vacancies
    const res = await vacanciesApi.getVacancies({
      count,
      page,
      published,
      keyword,
      payment_to,
      payment_from,
      catalogues
    })
    return res.data
  } catch (error) {
    return rejectWithValue(error)
  }
})

const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    },
    setFilters(state, action: PayloadAction<Partial<FilterAndSearchType>>) {
      state.keyword = action.payload.keyword
    }
  },
  extraReducers: builder => {
    builder.addCase(getVacancies.fulfilled, (state, action) => {
      state.objects = action.payload.objects
      state.total = action.payload.total
    })
  }
})

export const vacanciesReducer = vacanciesSlice.reducer
export const { setPage, setFilters } = vacanciesSlice.actions
