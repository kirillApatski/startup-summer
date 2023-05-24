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

  useEffect(() => {
    if (window.innerWidth < 768) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [])
  return (
    <div className={styles.wrapper}>
      <Vacancy isLink={false} styles={styles} vacancy={vacancy!} />
      <div className={styles.vacancyDescription} dangerouslySetInnerHTML={{ __html: vacancy!.vacancyRichText }}></div>
    </div>
  )
}
