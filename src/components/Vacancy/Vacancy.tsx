import React, { FC } from 'react'
import { ActionIcon } from '@mantine/core'
import { DotIcon } from 'assets/icons/DotIcon'
import { LocationIcon } from 'assets/icons/LocationIcon'
import { StarIcon } from 'assets/icons/StarIcon'
import { NavLink } from 'react-router-dom'
import { PATH } from 'common/enums/PATH'
import { salaryFork } from 'utils/getSalatyFork'

type VacancyPropsType = {
  profession: string
  payment_from: number
  payment_to: number
  type_of_work: { id: number; title: string }
  town: { id: number; title: string }
  currency: string
  id: number
  styles?: any
}

export const Vacancy: FC<VacancyPropsType> = ({
  profession,
  type_of_work,
  town,
  payment_to,
  payment_from,
  currency,
  id,
  styles
}) => {
  const salary = salaryFork(payment_from, payment_to, currency)
  return (
    <NavLink to={`${PATH.VACANCY_DETAILS}/${id}`} className={styles.vacancyWrapper}>
      <div className={styles.descriptionVacancy}>
        <h2 className={styles.title}>{profession}</h2>
        <p className={styles.descriptionWork}>
          <span className={styles.salary}>{salary}</span>
          <DotIcon />
          <span className={styles.timeWork}>{type_of_work.title}</span>
        </p>
        <p className={styles.city}>
          <LocationIcon />
          <span>{town.title}</span>
        </p>
      </div>
      <ActionIcon data-elem={`vacancy-${id}-shortlist-button`} className={styles.star}>
        <StarIcon />
      </ActionIcon>
    </NavLink>
  )
}
