import React, { FC } from 'react'
import { Pagination } from '@mantine/core'

type AppPaginationType = {
  className?: string
  total: number
  getNewPageVacancies: (page: number) => void
}

const AppPagination: FC<AppPaginationType> = ({ className, total, getNewPageVacancies }) => {
  const finishStyles = className ? className : ''
  const pageQuantity = Math.ceil((total > 500 ? 500 : total) / 4)
  const currentPageHandler = (currenPage: number) => {
    getNewPageVacancies(currenPage)
  }
  return <Pagination className={finishStyles} total={pageQuantity} onChange={currentPageHandler} />
}

export default AppPagination
