import React, { useEffect } from 'react'
import 'styles/App.scss'
import { Header } from 'components/layout/Header/Header'
import { Pages } from 'pages/Pages'
import { useAppDispatch, useAppSelector } from 'common/hooks/hooks'
import { authMe } from 'store/slices/authSlice'
import { getIsInitialized } from 'store/selectors/appSelectors'
import { AppLoader } from 'components/AppLoader/AppLoader'

export const App = () => {
  const dispatch = useAppDispatch()

  const isInitialized = useAppSelector(getIsInitialized)

  useEffect(() => {
    dispatch(authMe())
  }, [dispatch])

  if (isInitialized) {
    return <AppLoader />
  }

  return (
    <>
      <Header />
      <Pages />
    </>
  )
}
