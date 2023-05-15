import React from 'react'
import styles from './Header.module.scss'
import { LogoIcon } from 'assets/icons/LogoIcon'
import { NavLink } from 'react-router-dom'
import { PATH } from 'common/enums/PATH'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerWrapper} container`}>
        <div className={styles.logo}>
          <LogoIcon />
          <span className={styles.logoText}>Jobored</span>
        </div>
        <nav className={styles.herderMenu}>
          <ul className={styles.herderMenuItems}>
            <li className={styles.Item}>
              <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to={PATH.SEARCH_VACANCIES}>
                Поиск Вакансий
              </NavLink>
            </li>
            <li className={styles.Item}>
              <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to={PATH.FAVORITE}>
                Избранное
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
