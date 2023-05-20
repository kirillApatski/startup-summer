import React from 'react'
import { VacancyType } from 'api/vacanciesApi'
import { Vacancy } from 'components/Vacancy/Vacancy'
import styles from './Favorite.module.scss'

export const Favorite = () => {
  const favoriteData: VacancyType[] = JSON.parse(localStorage.getItem('favorite') || '')

  return (
    <div className={styles.favoriteWrapper}>
      {favoriteData.map(el => {
        return <Vacancy key={el.id} vacancy={el} />
      })}
    </div>
  )
}
