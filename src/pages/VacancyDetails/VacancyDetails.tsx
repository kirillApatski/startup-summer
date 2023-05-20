import React, { useEffect } from 'react'
import { Vacancy } from 'components/Vacancy/Vacancy'
import { useAppSelector } from 'common/hooks/hooks'
import { useParams } from 'react-router-dom'
import { getDataToLocalStorage, setDataToLocalStorage } from 'utils/localStorage'
import styles from './VacancyDetails.module.scss'

export const VacancyDetails = () => {
  const { id } = useParams()

  let vacancy = useAppSelector(state => state.vacancies.objects.find(vacancy => vacancy.id === Number(id)))
  vacancy = vacancy ? vacancy : getDataToLocalStorage('vacancy')

  useEffect(() => {
    setDataToLocalStorage('vacancy', JSON.stringify(vacancy))
  }, [vacancy])

  return (
    <div className={styles.wrapper}>
      <Vacancy styles={styles} vacancy={vacancy!} />
      <div className={styles.vacancyDescription} dangerouslySetInnerHTML={{ __html: vacancy!.vacancyRichText }}></div>
    </div>
  )
}
