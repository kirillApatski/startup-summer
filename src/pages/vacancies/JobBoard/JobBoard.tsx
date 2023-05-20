import React, { useEffect, useState } from 'react'
import { Vacancy } from 'components/Vacancy/Vacancy'
import { useAppDispatch, useAppSelector } from 'common/hooks/hooks'
import { getVacanciesState } from 'store/selectors/VacanciesSelectors'
import { getVacancies } from 'store/slices/vacanciesSlice'
import { VacancyType } from 'api/vacanciesApi'
import { setDataToLocalStorage } from 'utils/localStorage'

export const JobBoard = () => {
  const dispatch = useAppDispatch()
  const vacancies = useAppSelector(getVacanciesState)

  const [favoriteDta, setFavoriteDta] = useState<VacancyType[]>([])

  const setItemToLocalStorage = (e: MouseEvent, vacancy: VacancyType) => {
    e.preventDefault()
    setFavoriteDta([...favoriteDta, vacancy])
  }
  useEffect(() => {
    setDataToLocalStorage('favorite', JSON.stringify(favoriteDta))
  }, [favoriteDta])

  useEffect(() => {
    dispatch(getVacancies())
  }, [dispatch])
  return (
    <>
      {vacancies.map(vacancy => {
        return (
          <Vacancy
            key={vacancy.id}
            data-elem={`vacancy-_vacancy-${vacancy.id}`}
            vacancy={vacancy}
            setItemToLocalStorage={setItemToLocalStorage}
          />
        )
      })}
    </>
  )
}
