import React from 'react'
import { VacancyType } from 'api/vacanciesApi'
import { Vacancy } from 'components/Vacancy/Vacancy'
import styles from './Favorite.module.scss'
import { useAppSelector } from 'common/hooks/hooks'
import { getFavorite } from 'store/selectors/favoriteSelectors'

export const Favorite = () => {
  const favoriteData: VacancyType[] = JSON.parse(localStorage.getItem('favorite') || '')
  const data = useAppSelector(getFavorite)
  let a = favoriteData ? favoriteData : data

  return (
    <div className={styles.favoriteWrapper}>
      {a.map(el => {
        return <Vacancy key={el.id} vacancy={el} />
      })}
    </div>
  )
}
