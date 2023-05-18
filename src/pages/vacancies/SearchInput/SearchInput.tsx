import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import { Button, Input } from '@mantine/core'
import { SearchIcon } from 'assets/icons/SearchIcon'
import styles from './SearchInput.module.scss'
import { useAppDispatch } from 'common/hooks/hooks'
import { getVacancies, setFilters } from 'store/slices/vacanciesSlice'

export const SearchInput = () => {
  const dispatch = useAppDispatch()
  const [inputValue, setInputValue] = useState('')

  const onSearchVacancies = () => {
    dispatch(setFilters({ keyword: inputValue }))
    dispatch(getVacancies())
  }

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value)
  }
  const onKeyDownEnterHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    event.key === 'Enter' && onSearchVacancies()
  }
  return (
    <Input
      className={styles.input}
      value={inputValue}
      onChange={onChangeHandler}
      onKeyDown={onKeyDownEnterHandler}
      icon={<SearchIcon />}
      placeholder='Введите название вакансии'
      size={'md'}
      rightSectionWidth={105}
      rightSection={
        <Button className={styles.searchButton} onClick={onSearchVacancies}>
          Поиск
        </Button>
      }
    />
  )
}
