import React, { FC, MouseEvent } from 'react'
import { ActionIcon } from '@mantine/core'
import { DotIcon } from 'assets/icons/DotIcon'
import { LocationIcon } from 'assets/icons/LocationIcon'
import { StarIcon } from 'assets/icons/StarIcon'
import { NavLink } from 'react-router-dom'
import { PATH } from 'common/enums/PATH'
import { salaryFork } from 'utils/getSalatyFork'
import { VacancyType } from 'api/vacanciesApi'
import style from './Vacancy.module.scss'
import { setFavorite } from 'store/slices/favoriteSlice'
import { useAppDispatch, useAppSelector } from 'common/hooks/hooks'
import { getFavorite } from 'store/selectors/favoriteSelectors'

type VacancyPropsType = {
  vacancy: VacancyType
  styles?: any
}

export const Vacancy: FC<VacancyPropsType> = ({ styles, vacancy }) => {
  const dispatch = useAppDispatch()
  const favoriteVacancy = useAppSelector(getFavorite).find(favorite => favorite.id === vacancy.id)?.id

  const setFavoriteHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(setFavorite(vacancy))
  }
  const salary = salaryFork(vacancy.payment_from, vacancy.payment_to, vacancy.currency)
  const finishStyles = styles ? styles : style
  return (
    <NavLink to={`${PATH.VACANCY_DETAILS}/${vacancy.id}`} className={finishStyles.vacancyWrapper}>
      <div className={finishStyles.descriptionVacancy}>
        <h2 className={finishStyles.title}>{vacancy.profession}</h2>
        <p className={finishStyles.descriptionWork}>
          <span className={finishStyles.salary}>{salary}</span>
          <DotIcon />
          <span className={finishStyles.timeWork}>{vacancy.type_of_work.title}</span>
        </p>
        <p className={finishStyles.city}>
          <LocationIcon />
          <span>{vacancy.town.title}</span>
        </p>
      </div>
      <ActionIcon
        onClick={e => setFavoriteHandler(e)}
        data-elem={`vacancy-${vacancy.id}-shortlist-button`}
        className={
          favoriteVacancy === vacancy.id ? `${finishStyles.star} ${finishStyles.starActive}` : finishStyles.star
        }
      >
        <StarIcon />
      </ActionIcon>
    </NavLink>
  )
}
