import { instance } from 'api/instance/instance'

export const cataloguesApi = {
  getCatalogues() {
    return instance.get<CataloguesType[]>('catalogues')
  }
}

export type CataloguesType = {
  title: string
  title_trimmed: string
  key: number
}
