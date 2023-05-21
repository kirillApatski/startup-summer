import { RootState } from 'store/store'
import { VacancyType } from 'api/vacanciesApi'

export const getVacanciesState = (state: RootState): VacancyType[] => state.vacancies.objects
export const getTotalCount = (state: RootState): number => state.vacancies.total
