import React from 'react'
import { Button, Input } from '@mantine/core'
import { SearchIcon } from 'assets/icons/SearchIcon'
import styles from './SearchInput.module.scss'

export const SearchInput = () => {
  return (
    <Input
      className={styles.input}
      icon={<SearchIcon />}
      placeholder='Введите название вакансии'
      size={'md'}
      rightSectionWidth={105}
      rightSection={<Button className={styles.searchButton}>Поиск</Button>}
    />
  )
}
