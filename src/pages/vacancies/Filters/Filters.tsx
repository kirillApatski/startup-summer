import React from 'react'
import { Button } from '@mantine/core'

import styles from './Filters.module.scss'
import { CloseIcon } from 'assets/icons/CloseIcon'
import { SelectBox } from 'pages/vacancies/Filters/SelectBox/SelectBox'
import { CustomInput } from 'pages/vacancies/Filters/CustomInput/CustomInput'

export const Filters = () => {
  return (
    <div className={styles.filtersWrapper}>
      <div className={styles.filtersHeader}>
        <h3 className={styles.title}>Фильтры</h3>
        <Button
          className={styles.filterClose}
          compact
          rightIcon={<CloseIcon />}
          // onClick={resetAllHandler}
        >
          Сбросить все
        </Button>
      </div>
      <h3 className={styles.titleFilter}>Отрасль</h3>
      <SelectBox />
      <h3 className={styles.titleFilter}>Оклад</h3>
      <CustomInput customStyle={styles.inputNumber} placeholder='От' />
      <CustomInput customStyle={styles.inputNumber} placeholder='До' />
      <Button
        className={styles.buttonApply}

        // onClick={resetAllHandler}
      >
        Применить
      </Button>
    </div>
  )
}
