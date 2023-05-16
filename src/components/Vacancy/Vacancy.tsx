import React from 'react'
import { ActionIcon } from '@mantine/core'
import { DotIcon } from 'assets/icons/DotIcon'
import { LocationIcon } from 'assets/icons/LocationIcon'
import styles from 'components/Vacancy/Vacancy.module.scss'
import { StarIcon } from 'assets/icons/StarIcon'
import { NavLink } from 'react-router-dom'
import { PATH } from 'common/enums/PATH'

export const Vacancy = () => {
  return (
    <div className={styles.vacancyWrapper}>
      <div className={styles.descriptionVacancy}>
        <NavLink to={`${PATH.VACANCY_DETAILS}/123`}>
          <h2 className={styles.title}>Менеджер-дизайнер</h2>
        </NavLink>
        <p className={styles.descriptionWork}>
          <span className={styles.salary}>з/п от 70000 rub</span>
          <DotIcon />
          <span className={styles.timeWork}>Полный рабочий день</span>
        </p>
        <p className={styles.city}>
          <LocationIcon />
          <span>Новый Уренгой</span>
        </p>
      </div>
      <ActionIcon className={styles.star}>
        <StarIcon />
      </ActionIcon>
    </div>
  )
}
