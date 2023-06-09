import React, { useEffect } from 'react'
import { Vacancy } from 'components/Vacancy/Vacancy'
import { useAppDispatch, useAppSelector } from 'common/hooks/hooks'
import { getTotalCount, getVacanciesState } from 'store/selectors/VacanciesSelectors'
import { getVacancies, resetFilters, setTotal } from 'store/slices/vacanciesSlice'
import styles from './JobBoard.module.scss'
import { AppLoader } from 'components/AppLoader/AppLoader'
import { useNavigate } from 'react-router-dom'
import { PATH } from 'common/enums/PATH'
import { getIsLoading } from 'store/selectors/appSelectors'

export const JobBoard = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const vacancies = useAppSelector(getVacanciesState)
  const isLoading = useAppSelector(getIsLoading)
  const totalCount = useAppSelector(getTotalCount)

  useEffect(() => {
    dispatch(getVacancies())
  }, [dispatch])
  useEffect(() => {
    if (totalCount === 0) {
      navigate(PATH.EMPTY_STATE)
      dispatch(resetFilters())
      dispatch(setTotal(null))
    }
  }, [dispatch, navigate, totalCount])

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
