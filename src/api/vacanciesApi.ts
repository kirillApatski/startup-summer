import { instance } from 'api/instance/instance'

export const vacanciesApi = {
  getVacancies(params: { count: number } & Partial<FilterAndSearchType>) {
    return instance.get<VacanciesResponseType>('vacancies', { params })
  }
}

export type FilterAndSearchType = {
  filters: FiltersType
  pagination: PaginationType
  search: SearchVacanciesType
  published: number | null
}

export type FiltersType = {
  no_agreement: number | null
  payment_from: number | null
  payment_to: number | null
  catalogues: number | null
}

export type SearchVacanciesType = {
  keyword: string | null
}

export type PaginationType = {
  count: number
  page: null | number
}

export type VacanciesResponseType = {
  objects: VacancyType[]
  total: number | null
}

export type VacancyType = {
  id: number
  id_client: number
  payment_from: number
  payment_to: number
  profession: string
  currency: string
  type_of_work: {
    id: number
    title: string
  }
  town: {
    id: number
    title: string
  }
  vacancyRichText: string
}
