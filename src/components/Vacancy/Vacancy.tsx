import React, { FC, MouseEvent } from 'react'
import { ActionIcon } from '@mantine/core'
import { DotIcon } from 'assets/icons/DotIcon'
import { LocationIcon } from 'assets/icons/LocationIcon'
import { StarIcon } from 'assets/icons/StarIcon'
import { salaryFork } from 'utils/getSalatyFork'
import { VacancyType } from 'api/vacanciesApi'
import style from './Vacancy.module.scss'
import { setFavorite } from 'store/slices/favoriteSlice'
import { useAppDispatch, useAppSelector } from 'common/hooks/hooks'
import { getFavorite } from 'store/selectors/favoriteSelectors'
import { NavLinkContainer } from 'common/hoc/NavLinkContainer'

type VacancyPropsType = {
  vacancy: VacancyType
  styles?: any
  isLink: boolean
}

export const Vacancy: FC<VacancyPropsType> = ({ styles, vacancy, isLink }) => {
  const dispatch = useAppDispatch()
  const favoriteVacancy = useAppSelector(getFavorite).find(favorite => favorite.id === vacancy.id)?.id

  const setFavoriteHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    dispatch(setFavorite(vacancy))
  }
  const salary = salaryFork(vacancy.payment_from, vacancy.payment_to, vacancy.currency)
  const finishStyles = styles ? styles : style
  return (
    <NavLinkContainer isLink={isLink} className={finishStyles.vacancyWrapper} vacancyId={vacancy.id}>
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
        onClick={setFavoriteHandler}
        data-elem={`vacancy-${vacancy.id}-shortlist-button`}
        className={
          favoriteVacancy === vacancy.id ? `${finishStyles.star} ${finishStyles.starActive}` : finishStyles.star
        }
      >
        <StarIcon />
      </ActionIcon>
    </NavLinkContainer>
  )
}
