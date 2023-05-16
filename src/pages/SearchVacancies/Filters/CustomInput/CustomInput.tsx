import React, { FC, useRef } from 'react'
import { NumberInput, NumberInputHandlers } from '@mantine/core'
import { ArrowIcon } from 'assets/icons/ArrowIcon'
import styles from './CustomInput.module.scss'

type CustomInputProps = {
  placeholder: string
  customStyle: string
}

export const CustomInput: FC<CustomInputProps> = ({ placeholder, customStyle }) => {
  const handlers = useRef<NumberInputHandlers>()

  const incrementHandler = () => {
    handlers.current?.increment()
  }
  const decrementHandler = () => {
    handlers.current?.decrement()
  }

  return (
    <NumberInput
      className={customStyle}
      placeholder={placeholder}
      handlersRef={handlers}
      rightSection={<ArrowBox increment={incrementHandler} decrement={decrementHandler} />}
    />
  )
}

type ArrowBoxProps = {
  increment?: () => void
  decrement?: () => void
}

const ArrowBox: FC<ArrowBoxProps> = ({ increment }) => {
  return (
    <div className={styles.arrowBox}>
      <ArrowIcon className={styles.arrowTop} />
      <ArrowIcon className={styles.arrowBottom} />
    </div>
  )
}
