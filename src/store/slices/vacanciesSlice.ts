import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from 'utils/create-app-async-thunk'
import {
  FilterAndSearchType,
  FiltersType,
  SearchVacanciesType,
  vacanciesApi,
  VacanciesResponseType
} from 'api/vacanciesApi'
import { defaultCountPage } from 'common/constants/constants'

const initialState: VacanciesResponseType & FilterAndSearchType = {
  objects: [],
  total: null,
  published: 1,
  filters: {
    no_agreement: null,
    payment_from: null,
    payment_to: null,
    catalogues: null
  },
  pagination: {
    count: defaultCountPage,
    page: null
  },
  search: {
    keyword: null
  }
}

export const getVacancies = createAppAsyncThunk('vacancies/getVacancies', async (_, { rejectWithValue, getState }) => {
  try {
    const filters = getState().vacancies.filters
    const pagination = getState().vacancies.pagination
    const search = getState().vacancies.search
    const published = getState().vacancies.published

    const res = await vacanciesApi.getVacancies({
      ...search,
      ...filters,
      ...pagination,
      published
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
      state.pagination.page = action.payload
    },
    setSearchVacancies(state, action: PayloadAction<SearchVacanciesType>) {
      state.search.keyword = action.payload.keyword
    },
    setTotal(state, action: PayloadAction<null>) {
      state.total = action.payload
    },
    setFilters(state, action: PayloadAction<FiltersType>) {
      state.filters.catalogues = action.payload.catalogues
      state.filters.payment_from = action.payload.payment_from
      state.filters.payment_to = action.payload.payment_to
      state.filters.no_agreement = action.payload.no_agreement
    },
    resetFilters(state) {
      state.filters.payment_to = null
      state.filters.payment_from = null
      state.filters.catalogues = null
      state.search.keyword = null
      state.filters.no_agreement = null
    }
  },
  extraReducers: builder => {
    builder.addCase(getVacancies.fulfilled, (state, action) => {
      state.objects = action.payload.objects
      if (action.payload.total === 0) {
        state.total = 0
      } else {
        state.total = action.payload.total
      }
    })
  }
})

export const vacanciesReducer = vacanciesSlice.reducer
export const { setTotal, setPage, setFilters, setSearchVacancies, resetFilters } = vacanciesSlice.actions
