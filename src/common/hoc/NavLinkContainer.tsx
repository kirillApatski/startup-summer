import React, { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { PATH } from 'common/enums/PATH'

type NavLinkContainerPropsType = {
  children: ReactNode
  isLink: boolean
  className: any
  vacancyId: number
}

export const NavLinkContainer: FC<NavLinkContainerPropsType> = ({ children, isLink, className, vacancyId }) => {
  return (
    <>
      {isLink ? (
        <NavLink to={`${PATH.VACANCY_DETAILS}/${vacancyId}`} data-elem={`vacancy-${vacancyId}`} className={className}>
          {children}
        </NavLink>
      ) : (
        <div className={className}>{children}</div>
      )}
    </>
  )
}
