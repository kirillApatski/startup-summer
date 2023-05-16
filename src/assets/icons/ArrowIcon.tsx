import React, { FC } from 'react'

type ArrowIconProps = {
  className?: string
  collBak?: () => void
}

export const ArrowIcon: FC<ArrowIconProps> = ({ className, collBak }) => {
  const finishStyle = className ? className : ''

  return (
    <svg
      onClick={collBak}
      className={finishStyle}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5 9L11.2191 14.3306C11.6684 14.7158 12.3316 14.7158 12.7809 14.3306L19 9'
        stroke='#ACADB9'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
