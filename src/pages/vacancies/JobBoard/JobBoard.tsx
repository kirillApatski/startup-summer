import React, { useEffect } from 'react'
import { Vacancy } from 'components/Vacancy/Vacancy'
import { useAppDispatch, useAppSelector } from 'common/hooks/hooks'
import { getVacanciesState } from 'store/selectors/VacanciesSelectors'
import { getVacancies } from 'store/slices/vacanciesSlice'
import styles from './JobBoard.module.scss'

export const JobBoard = () => {
  const dispatch = useAppDispatch()
  const vacancies = useAppSelector(getVacanciesState)
  useEffect(() => {
    dispatch(getVacancies())
  }, [dispatch])
  return (
    <>
      {vacancies.map(vacancy => {
        return (
          <Vacancy
            styles={styles}
            data-elem={`vacancy-_vacancy-${vacancy.id}`}
            key={vacancy.id}
            id={vacancy.id}
            profession={vacancy.profession}
            payment_from={vacancy.payment_from}
            payment_to={vacancy.payment_to}
            type_of_work={vacancy.type_of_work}
            town={vacancy.town}
            currency={vacancy.currency}
          />
        )
      })}
    </>
  )
}
