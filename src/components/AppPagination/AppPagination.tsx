import React, { FC } from 'react'
import { Pagination } from '@mantine/core'
import { getVacancies, setPage } from 'store/slices/vacanciesSlice'
import { useAppDispatch, useAppSelector } from 'common/hooks/hooks'

type AppPaginationType = {
  className?: string
  total: number
}

const AppPagination: FC<AppPaginationType> = ({ className, total }) => {
  const dispatch = useAppDispatch()

  const currentPage = useAppSelector(state => state.vacancies.page)

  const pageQuantity = Math.ceil((total > 500 ? 500 : total) / 4)

  const currentPageHandler = (page: number) => {
    dispatch(setPage(page - 1))
    dispatch(getVacancies())
  }

  const finishStyles = className ? className : ''
  return (
    <Pagination className={finishStyles} total={pageQuantity} value={currentPage! + 1} onChange={currentPageHandler} />
  )
}

export default AppPagination
