import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authReducer } from 'store/slices/authSlice'
import thunkMiddleware from 'redux-thunk'
import { appReducer } from 'store/slices/appSlice'
import { vacanciesReducer } from 'store/slices/vacanciesSlice'
import { cataloguesReducer } from 'store/slices/cataloguesSlice'
import { favoriteReducer } from 'store/slices/favoriteSlice'

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  vacancies: vacanciesReducer,
  catalogues: cataloguesReducer,
  favorite: favoriteReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
