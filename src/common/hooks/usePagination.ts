import { useState } from 'react'
import { VacancyType } from 'api/vacanciesApi'

export const usePagination = (count: number, finalDataFavoriteVacancy: VacancyType[]) => {
  const [page, setPage] = useState<number>(1)

  const pageCount = Math.ceil(finalDataFavoriteVacancy.length / count)
  const lastContentIndex = page * count
  const firstContentIndex = lastContentIndex - count

  if (page > pageCount) {
    setPage(state => state - 1)
  }

  const setPageHandler = (pageNumber: number) => {
    setPage(pageNumber)
  }

  return {
    setPageHandler,
    totalPage: pageCount,
    firstContentIndex,
    lastContentIndex,
    page
  }
}
