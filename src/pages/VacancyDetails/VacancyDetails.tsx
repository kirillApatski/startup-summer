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
      <Vacancy
        styles={styles}
        profession={vacancy!.profession}
        payment_from={vacancy!.payment_from}
        payment_to={vacancy!.payment_to}
        type_of_work={vacancy!.type_of_work}
        town={vacancy!.town}
        currency={vacancy!.currency}
        id={vacancy!.id}
      />
    </div>
  )
}
