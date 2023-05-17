import React, { useEffect } from 'react'
import { ArrowIcon } from 'assets/icons/ArrowIcon'
import { Select } from '@mantine/core'
import styles from './SelectBox.module.scss'
import { useAppDispatch, useAppSelector } from 'common/hooks/hooks'
import { getCatalogues } from 'store/slices/cataloguesSlice'
import { getCatalogs } from 'store/selectors/cataloguesSelectors'

export const SelectBox = () => {
  const dispatch = useAppDispatch()
  const catalogs = useAppSelector(getCatalogs)
  const dataSelect = catalogs.map(catalog => ({
    value: String(catalog.key),
    label: catalog.title
  }))
  useEffect(() => {
    dispatch(getCatalogues())
  }, [])
  return (
    <Select
      data-elem='industry-select'
      className={styles.select}
      placeholder='Выберете отрасль'
      styles={{ rightSection: { pointerEvents: 'none' } }}
      data={dataSelect}
      rightSection={<ArrowIcon />}
      rightSectionWidth={36}
    />
  )
}
