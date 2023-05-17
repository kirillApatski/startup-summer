const SALARY_SUM = 0

export const salaryFork = (payment_from: number, payment_to: number, currency: string) => {
  if (payment_from === SALARY_SUM && payment_to === SALARY_SUM) {
    return 'з/п Договорная'
  }
  if (payment_from > SALARY_SUM && payment_to === SALARY_SUM) {
    return `з/п от ${payment_from} ${currency}`
  }
  if (payment_from === SALARY_SUM && payment_to > SALARY_SUM) {
    return `з/п до ${payment_to} ${currency}`
  }
  if (payment_from > SALARY_SUM && payment_to >= payment_from) {
    return `з/п ${payment_from} - ${payment_to} ${currency}`
  }
  if (payment_from === payment_to) {
    return `з/п ${payment_from} ${currency}`
  }
}
