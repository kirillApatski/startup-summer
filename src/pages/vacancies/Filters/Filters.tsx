import React, { useState } from 'react'
import { Button } from '@mantine/core'

import styles from './Filters.module.scss'
import { CloseIcon } from 'assets/icons/CloseIcon'
import { SelectBox } from 'pages/vacancies/Filters/SelectBox/SelectBox'
import { CustomInput } from 'pages/vacancies/Filters/CustomInput/CustomInput'
import { FiltersType } from 'api/vacanciesApi'
import { useAppDispatch } from 'common/hooks/hooks'
import { getVacancies, resetFilters, setFilters } from 'store/slices/vacanciesSlice'
import { inputStep } from 'common/constants/constants'

export const Filters = () => {
  const dispatch = useAppDispatch()

  const [filtersVacancies, setFiltersVacancies] = useState<FiltersType>({
    payment_from: null,
    payment_to: null,
    catalogues: null,
    no_agreement: null
  })

  const applyAFilters = () => {
    dispatch(setFilters(filtersVacancies))
    dispatch(getVacancies())
  }

  const resetAFilters = () => {
    dispatch(resetFilters())

    setFiltersVacancies({
      payment_from: null,
      payment_to: null,
      catalogues: null,
      no_agreement: null
    })

    dispatch(getVacancies())
  }
  const onSelectCategoryHandler = (category: number) => {
    if (category === 0) {
      setFiltersVacancies({ ...filtersVacancies, catalogues: null, no_agreement: null })
    } else {
      setFiltersVacancies({ ...filtersVacancies, catalogues: category, no_agreement: 1 })
    }
  }

  const onChangeSalaryToHandler = (salaryTo: number | '') => {
    if (salaryTo === '' || salaryTo === 0) {
      setFiltersVacancies({ ...filtersVacancies, payment_to: null, no_agreement: null })
    } else {
      setFiltersVacancies({ ...filtersVacancies, payment_to: Number(salaryTo), no_agreement: 1 })
    }
  }

  const onChangeSalaryFromHandler = (salaryFrom: number | '') => {
    if (salaryFrom === '' || salaryFrom === 0) {
      setFiltersVacancies({ ...filtersVacancies, payment_from: null, no_agreement: null })
    } else {
      setFiltersVacancies({ ...filtersVacancies, payment_from: Number(salaryFrom), no_agreement: 1 })
    }
  }

  return (
    <div className={styles.filtersWrapper}>
      <div className={styles.filtersHeader}>
        <h3 className={styles.title}>Фильтры</h3>
        <Button className={styles.filterReset} compact rightIcon={<CloseIcon />} onClick={resetAFilters}>
          Сбросить все
        </Button>
      </div>
      <h3 className={styles.titleFilter}>Отрасль</h3>
      <SelectBox value={filtersVacancies.catalogues!} onSelectCategory={onSelectCategoryHandler} />
      <h3 className={styles.titleFilter}>Оклад</h3>
      <CustomInput
        data-elem='salary-from-input'
        value={filtersVacancies.payment_from!}
        customStyle={styles.inputNumber}
        placeholder='От'
        onChange={onChangeSalaryFromHandler}
        step={inputStep}
        min={0}
      />
      <CustomInput
        data-elem='salary-to-input'
        value={filtersVacancies.payment_to!}
        customStyle={styles.inputNumber}
        placeholder='До'
        onChange={onChangeSalaryToHandler}
        step={inputStep}
        min={filtersVacancies.payment_from ? Number(filtersVacancies.payment_from) : 0}
      />
      <Button data-elem='search-button' className={styles.buttonApply} onClick={applyAFilters}>
        Применить
      </Button>
    </div>
  )
}
