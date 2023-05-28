import React from 'react'
import styles from 'pages/vacancies/Vacancies.module.scss'
import { Filters } from 'pages/vacancies/Filters/Filters'
import { SearchInput } from 'pages/vacancies/SearchInput/SearchInput'
import { JobBoard } from 'pages/vacancies/JobBoard/JobBoard'
import AppPagination from 'components/AppPagination/AppPagination'
import { useAppSelector } from 'common/hooks/hooks'
import { getTotalCount } from 'store/selectors/VacanciesSelectors'
import { getIsLoading } from 'store/selectors/appSelectors'

export const Vacancies = () => {
  const totalCount = useAppSelector(getTotalCount)
  const isLoading = useAppSelector(getIsLoading)

  return (
    <div className={isLoading ? `${styles.wrapper} disable` : styles.wrapper}>
      <Filters />
      <div className={styles.searchBoard}>
        <SearchInput />
        <JobBoard />
        <AppPagination className={styles.pagination} total={totalCount === null ? 0 : totalCount} />
      </div>
    </div>
  )
}
