import React, { FC } from 'react'
import { Loader } from '@mantine/core'

type AppLoaderType = {
  styles?: string
}

export const AppLoader: FC<AppLoaderType> = ({ styles }) => {
  const finishStyles = styles ? styles : ''
  return <Loader className={finishStyles} />
}
