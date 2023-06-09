import React, { FC, useEffect, useState } from 'react'
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

  const [isDropdown, setIsDropdown] = useState(false)

  const dataSelect = catalogs.map(catalog => ({
    value: String(catalog.key),
    label: catalog.title
  }))

  const onSelectedHandler = (selectedItem: string) => {
    onSelectCategory(Number(selectedItem))
  }

  const selectStyles = {
    rightSection: styles.rightSection,
    item: styles.selectItem,
    itemsWrapper: styles.wrapperItems
  }

  useEffect(() => {
    dispatch(getCatalogues())
  }, [dispatch])

  return (
    <Select
      data-elem='industry-select'
      allowDeselect
      value={String(value)}
      className={styles.select}
      placeholder='Выберете отрасль'
      classNames={selectStyles}
      data={dataSelect}
      onDropdownOpen={() => setIsDropdown(true)}
      onDropdownClose={() => setIsDropdown(false)}
      onChange={onSelectedHandler}
      rightSection={<ArrowIcon className={isDropdown ? styles.dropDowOpen : undefined} />}
      rightSectionWidth={36}
    />
  )
}
