import React, { useEffect } from 'react'
import { Vacancy } from 'components/Vacancy/Vacancy'
import { useAppDispatch, useAppSelector } from 'common/hooks/hooks'
import { getVacanciesState } from 'store/selectors/VacanciesSelectors'
import { getVacancies } from 'store/slices/vacanciesSlice'

export const JobBoard = () => {
  const dispatch = useAppDispatch()
  const vacancies = useAppSelector(getVacanciesState)

  useEffect(() => {
    dispatch(getVacancies())
  }, [dispatch])
  return (
    <>
      {vacancies.map(vacancy => {
        return <Vacancy key={vacancy.id} data-elem={`vacancy-_vacancy-${vacancy.id}`} vacancy={vacancy} />
      })}
    </>
  )
}
