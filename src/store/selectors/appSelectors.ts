import { RootState } from 'store/store'

export const getIsInitialized = (state: RootState): boolean => state.app.isInitialized
