import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { PATH } from 'common/enums/PATH'
import { Vacancies } from 'pages/vacancies/Vacancies'
import { Favorite } from 'pages/Favorite/Favorite'
import { VacancyDetails } from 'pages/VacancyDetails/VacancyDetails'

export const Pages = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path={'/'} element={<Vacancies />} />
        <Route path={PATH.SEARCH_VACANCIES} element={<Vacancies />} />
        <Route path={PATH.FAVORITE} element={<Favorite />} />
        <Route path={`${PATH.VACANCY_DETAILS}/:id`} element={<VacancyDetails />} />
        <Route path='*' element={<Navigate to={PATH.SEARCH_VACANCIES} />} />
      </Routes>
    </div>
  )
}
