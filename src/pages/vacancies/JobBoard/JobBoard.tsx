import React, { useEffect } from 'react'
import { Vacancy } from 'components/Vacancy/Vacancy'
import { useAppDispatch, useAppSelector } from 'common/hooks/hooks'
import { getTotalCount, getVacanciesState } from 'store/selectors/VacanciesSelectors'
import { getVacancies } from 'store/slices/vacanciesSlice'
import styles from './JobBoard.module.scss'
import { AppLoader } from 'components/AppLoader/AppLoader'
import { useNavigate } from 'react-router-dom'
import { PATH } from 'common/enums/PATH'

export const JobBoard = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const vacancies = useAppSelector(getVacanciesState)
  const isLoading = useAppSelector(state => state.app.status === 'loading')
  const totalCount = useAppSelector(getTotalCount)

  useEffect(() => {
    dispatch(getVacancies())
  }, [dispatch])

  if (totalCount === 0) {
    navigate(PATH.EMPTY_STATE)
  }

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
