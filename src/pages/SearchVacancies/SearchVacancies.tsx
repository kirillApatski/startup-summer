import React from 'react'
import styles from './SearchVacancies.module.scss'
import { Filters } from 'pages/SearchVacancies/Filters/Filters'
import { SearchInput } from 'pages/SearchVacancies/SearchInput/SearchInput'
import { Vacancies } from 'pages/SearchVacancies/Vacancies/Vacancies'

export const SearchVacancies = () => {
  return (
    <div className={styles.wrapper}>
      <Filters />
      <div className={styles.searchBoard}>
        <SearchInput />
        <Vacancies />
      </div>
    </div>
  )
}
