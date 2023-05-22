import React from 'react'
import { Loader } from '@mantine/core'
import styles from './AppLoader.module.scss'

export const AppLoader = () => {
  return <Loader className={styles.loader} />
}
