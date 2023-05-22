import axios from 'axios'

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'x-secret-key': process.env.REACT_APP_SECRET_KEY,
    'X-Api-App-Id': process.env.REACT_APP_APP_ID
  }
})

if (localStorage.getItem('auth')) {
  const tokenType = JSON.parse(localStorage.getItem('auth') || '').token_type
  const accessToken = localStorage.getItem('auth') && JSON.parse(localStorage.getItem('auth') || '').access_token

  instance.interceptors.request.use(request => {
    request.headers.Authorization = `${tokenType} ${accessToken}`
    return request
  })
}
