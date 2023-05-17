import { instance } from 'api/instance/instance'

export const authApi = {
  passwordAuth() {
    return instance.get<AuthResponseType>('oauth2/password', {
      params: {
        login: process.env.REACT_APP_LOGIN,
        password: process.env.REACT_APP_PASSWORD,
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_APP_ID,
        hr: process.env.REACT_APP_HR
      }
    })
  },
  refreshToken(refreshToken: string) {
    return instance.get('oauth2/refresh_token', {
      params: {
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_APP_ID,
        refresh_token: refreshToken
      }
    })
  }
}

export type AuthResponseType = {
  access_token: string
  expires_in: number
  refresh_token: string
  token_type: string
  ttl: number
}
