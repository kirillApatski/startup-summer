import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { PATH } from 'common/enums/PATH'
import { Favorite } from 'pages/Favorite/Favorite'
import { VacancyDetails } from 'pages/VacancyDetails/VacancyDetails'
import { EmptyState } from 'pages/EmptyState/EmptyState'
import { Vacancies } from 'pages/vacancies/Vacancies'

export const Pages = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path={PATH.SEARCH_VACANCIES} element={<Vacancies />} />
        <Route path={`${PATH.SEARCH_VACANCIES}/:id`} element={<VacancyDetails />} />
        <Route path={PATH.FAVORITE} element={<Favorite />} />
        <Route path={PATH.EMPTY_STATE} element={<EmptyState />} />
        <Route path='*' element={<Navigate to={PATH.SEARCH_VACANCIES} />} />
      </Routes>
    </div>
  )
}
