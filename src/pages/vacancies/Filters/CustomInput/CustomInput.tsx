import React, { FC, useRef } from 'react'
import { NumberInput, NumberInputHandlers, NumberInputProps } from '@mantine/core'
import { ArrowIcon } from 'assets/icons/ArrowIcon'
import styles from './CustomInput.module.scss'

type CustomInputProps = {
  placeholder: string
  customStyle: string
  value: number
  onChange: (salary: number) => void
  step: number
  min: number
}

export const CustomInput = (props: NumberInputProps & CustomInputProps) => {
  const { placeholder, customStyle, onChange, value, min, step, ...rest } = props
  const handlers = useRef<NumberInputHandlers>()

  const onChangeHandler = (inputValue: number) => {
    props.onChange(inputValue)
  }

  const incrementHandler = () => {
    handlers.current?.increment()
  }
  const decrementHandler = () => {
    handlers.current?.decrement()
  }

  return (
    <NumberInput
      {...rest}
      type='number'
      hideControls
      value={value ? value : ''}
      className={customStyle}
      placeholder={placeholder}
      handlersRef={handlers}
      step={step}
      min={min}
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
