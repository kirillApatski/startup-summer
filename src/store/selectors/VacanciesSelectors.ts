import { RootState } from 'store/store'
import { VacancyType } from 'api/vacanciesApi'

export const getVacanciesState = (state: RootState): VacancyType[] => state.vacancies.objects
export const getVacancyState = (state: RootState, id: number): VacancyType | void => {
  return state.vacancies.objects.find(vacancy => vacancy.id === id)
}
export const getTotalCount = (state: RootState): number | null => state.vacancies.total
