import { RootState } from 'store/store'
import { CataloguesType } from 'api/cataloguesApi'

export const getCatalogs = (state: RootState): CataloguesType[] => state.catalogues
