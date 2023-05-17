import React from 'react'
import styles from 'pages/vacancies/Vacancies.module.scss'
import { Filters } from 'pages/vacancies/Filters/Filters'
import { SearchInput } from 'pages/vacancies/SearchInput/SearchInput'
import { JobBoard } from 'pages/vacancies/JobBoard/JobBoard'
import AppPagination from 'components/AppPagination/AppPagination'
import { useAppDispatch, useAppSelector } from 'common/hooks/hooks'
import { getTotalCount } from 'store/selectors/VacanciesSelectors'
import { getVacancies } from 'store/slices/vacanciesSlice'

export const Vacancies = () => {
  const dispatch = useAppDispatch()
  const totalCount = useAppSelector(getTotalCount)

  const getNewPageVacancies = (page: number) => {
    dispatch(getVacancies(page))
  }

  return (
    <div className={styles.wrapper}>
      <Filters />
      <div className={styles.searchBoard}>
        <SearchInput />
        <JobBoard />
        <AppPagination className={styles.pagination} total={totalCount} getNewPageVacancies={getNewPageVacancies} />
      </div>
    </div>
  )
}
