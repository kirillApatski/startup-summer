import React from 'react'
import { ArrowIcon } from 'assets/icons/ArrowIcon'
import { Select } from '@mantine/core'
import styles from './SelectBox.module.scss'

const data = [
  {
    image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
    label: 'Bender Bending Rodríguez',
    value: 'Bender Bending Rodríguez',
    description: 'Fascinated with cooking'
  },

  {
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    label: 'Carol Miller',
    value: 'Carol Miller',
    description: 'One of the richest people on Earth'
  },
  {
    image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
    label: 'Homer Simpson',
    value: 'Homer Simpson',
    description: 'Overweight, lazy, and often ignorant'
  },
  {
    image: 'https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png',
    label: 'Spongebob Squarepants',
    value: 'Spongebob Squarepants',
    description: 'Not just a sponge'
  }
]

export const SelectBox = () => {
  return (
    <Select
      className={styles.select}
      placeholder='Выберете отрасль'
      data={data}
      searchable
      rightSectionWidth={36}
      rightSection={<ArrowIcon />}
    />
  )
}
