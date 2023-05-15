import React from 'react'
import 'styles/App.css'
import { Header } from 'components/layout/Header/Header'
import { Pages } from 'pages/Pages'

export const App = () => {
  return (
    <>
      <Header />
      <Pages />
    </>
  )
}
