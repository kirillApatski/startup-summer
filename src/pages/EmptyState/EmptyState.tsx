import React from 'react'
import styles from './EmptyState.module.scss'
import { Button } from '@mantine/core'
import { EmptyStateIcon } from 'assets/icons/EmptyStateIcon'
import { NavLink } from 'react-router-dom'
import { PATH } from 'common/enums/PATH'

export const EmptyState = () => {
  return (
    <div className={styles.emptyWrapper}>
      <EmptyStateIcon />
      <h3 className={styles.emptyTitle}>Упс, здесь еще ничего нет!</h3>
      <NavLink to={PATH.SEARCH_VACANCIES}>
        <Button className={styles.btnToSearchVacancies}>Поиск Вакансий</Button>
      </NavLink>
    </div>
  )
}
