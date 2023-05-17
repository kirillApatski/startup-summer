import { instance } from 'api/instance/instance'

export const vacanciesApi = {
  getVacancies(page: number) {
    return instance.get<VacanciesResponseType>('vacancies', {
      params: {
        page,
        count: 4
      }
    })
  }
}

export type FilterAndSearchType = {
  count: number
  filterAndSearch: {
    published: number
    keyword?: string | null
    payment_from?: number | null
    payment_to?: number | null
    catalogues?: number | null
  }
}

export type VacanciesResponseType = {
  objects: VacancyType[]
  total: number
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
}
