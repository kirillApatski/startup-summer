import React, { FC, useRef } from 'react'
import { NumberInput, NumberInputHandlers } from '@mantine/core'
import { ArrowIcon } from 'assets/icons/ArrowIcon'
import styles from './CustomInput.module.scss'

type CustomInputProps = {
  placeholder: string
  customStyle: string
  value: number
  onChange: (salary: number) => void
}

export const CustomInput: FC<CustomInputProps> = ({ placeholder, customStyle, onChange, value }) => {
  const handlers = useRef<NumberInputHandlers>()

  const onChangeHandler = (inputValue: number) => {
    onChange(inputValue)
  }

  const incrementHandler = () => {
    handlers.current?.increment()
  }
  const decrementHandler = () => {
    handlers.current?.decrement()
  }

  return (
    <NumberInput
      type='number'
      value={value ? value : ''}
      className={customStyle}
      placeholder={placeholder}
      handlersRef={handlers}
      step={500}
      onChange={onChangeHandler}
      rightSection={<ArrowBox increment={incrementHandler} decrement={decrementHandler} />}
    />
  )
}

type ArrowBoxProps = {
  increment?: () => void
  decrement?: () => void
}

const ArrowBox: FC<ArrowBoxProps> = ({ increment, decrement }) => {
  return (
    <div className={styles.arrowBox}>
      <ArrowIcon className={styles.arrowTop} collBak={increment} />
      <ArrowIcon className={styles.arrowBottom} collBak={decrement} />
    </div>
  )
}
