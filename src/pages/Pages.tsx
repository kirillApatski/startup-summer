import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PATH } from 'common/enums/PATH'
import { SearchVacancies } from 'pages/SearchVacancies/SearchVacancies'
import { Favorite } from 'pages/Favorite/Favorite'

export const Pages = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path={'/'} element={<SearchVacancies />} />
        <Route path={PATH.SEARCH_VACANCIES} element={<SearchVacancies />} />
        <Route path={PATH.FAVORITE} element={<Favorite />} />
      </Routes>
    </div>
  )
}
