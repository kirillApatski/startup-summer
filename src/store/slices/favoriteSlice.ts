import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { VacancyType } from 'api/vacanciesApi'
import { setDataToLocalStorage } from 'utils/localStorage'

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: JSON.parse(localStorage.getItem('favorite') || '[]') as VacancyType[],
  reducers: {
    setFavorite(state, action: PayloadAction<VacancyType>) {
      const vacancyIndex = state.findIndex(vacancy => vacancy.id === action.payload.id)
      if (vacancyIndex === -1) state.push(action.payload)
      if (vacancyIndex > -1) state.splice(vacancyIndex, 1)
      setDataToLocalStorage('favorite', JSON.stringify(state))
    }
  }
})

export const favoriteReducer = favoriteSlice.reducer
export const { setFavorite } = favoriteSlice.actions
