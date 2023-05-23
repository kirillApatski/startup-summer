import React, { useEffect, useState } from 'react'
import { VacancyType } from 'api/vacanciesApi'
import { Vacancy } from 'components/Vacancy/Vacancy'
import { useAppSelector } from 'common/hooks/hooks'
import { getFavorite } from 'store/selectors/favoriteSelectors'
import { usePagination } from 'common/hooks/usePagination'
import { Pagination } from '@mantine/core'
import styles from './Favorite.module.scss'
import { useNavigate } from 'react-router-dom'
import { PATH } from 'common/enums/PATH'
import { defaultCountPage } from 'common/constants/constants'

export const Favorite = () => {
  const navigate = useNavigate()
  const vacancyFavorite = useAppSelector(getFavorite)

  const [currentVacancy, setCurrentVacancy] = useState<VacancyType[]>(vacancyFavorite)

  const { totalPage, page, firstContentIndex, lastContentIndex, setPageHandler } = usePagination(
    defaultCountPage,
    vacancyFavorite
  )

  useEffect(() => {
    setCurrentVacancy(vacancyFavorite)
  }, [vacancyFavorite, vacancyFavorite.length])

  useEffect(() => {
    if (!vacancyFavorite.length) {
      navigate(PATH.EMPTY_STATE)
    }
  }, [navigate, vacancyFavorite])

  return (
    <div className={styles.favoriteWrapper}>
      {currentVacancy.slice(firstContentIndex, lastContentIndex).map(el => {
        return <Vacancy isLink={true} key={el.id} vacancy={el} />
      })}
      <Pagination className={styles.pagination} total={totalPage} value={page} onChange={setPageHandler} />
    </div>
  )
}
