import React, { useEffect } from 'react'
import { Vacancy } from 'components/Vacancy/Vacancy'
import { useAppDispatch, useAppSelector } from 'common/hooks/hooks'
import { getVacanciesState } from 'store/selectors/VacanciesSelectors'
import { getVacancies } from 'store/slices/vacanciesSlice'
import styles from './JobBoard.module.scss'
import { AppLoader } from 'components/AppLoader/AppLoader'

export const JobBoard = () => {
  const dispatch = useAppDispatch()

  const vacancies = useAppSelector(getVacanciesState)
  const isLoading = useAppSelector(state => state.app.status === 'loading')

  useEffect(() => {
    dispatch(getVacancies())
  }, [dispatch])

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <AppLoader />
      ) : (
        vacancies.map(vacancy => {
          return (
            <Vacancy isLink={true} key={vacancy.id} data-elem={`vacancy-_vacancy-${vacancy.id}`} vacancy={vacancy} />
          )
        })
      )}
    </div>
  )
}
