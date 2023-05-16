import React from 'react'
import styles from './SearchVacancies.module.scss'
import { Filters } from 'pages/SearchVacancies/Filters/Filters'

export const SearchVacancies = () => {
  return (
    <div className={styles.wrapper}>
      <Filters />
    </div>
  )
}
