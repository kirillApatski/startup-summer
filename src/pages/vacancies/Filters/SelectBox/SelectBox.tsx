import React, { FC, useEffect } from 'react'
import { ArrowIcon } from 'assets/icons/ArrowIcon'
import { Select } from '@mantine/core'
import styles from './SelectBox.module.scss'
import { useAppDispatch, useAppSelector } from 'common/hooks/hooks'
import { getCatalogues } from 'store/slices/cataloguesSlice'
import { getCatalogs } from 'store/selectors/cataloguesSelectors'

type SelectBoxPropsType = {
  value: number
  onSelectCategory: (select: number) => void
}

export const SelectBox: FC<SelectBoxPropsType> = ({ onSelectCategory, value }) => {
  const dispatch = useAppDispatch()
  const catalogs = useAppSelector(getCatalogs)
  const dataSelect = catalogs.map(catalog => ({
    value: String(catalog.key),
    label: catalog.title
  }))
  const onSelectedHandler = (selectedItem: string) => {
    onSelectCategory(Number(selectedItem))
  }
  useEffect(() => {
    dispatch(getCatalogues())
  }, [dispatch])
  return (
    <Select
      data-elem='industry-select'
      value={String(value)}
      className={styles.select}
      placeholder='Выберете отрасль'
      styles={{ rightSection: { pointerEvents: 'none' } }}
      data={dataSelect}
      onChange={onSelectedHandler}
      rightSection={<ArrowIcon />}
      rightSectionWidth={36}
    />
  )
}
