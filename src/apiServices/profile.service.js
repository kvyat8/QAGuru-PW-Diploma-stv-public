import { faker } from '@faker-js/faker'
import { apiUrl, capperUser } from '../../helpers/constants'
import axios from 'axios'
import { step } from 'allure-js-commons'

export class ProfileService {
  constructor() {}

  async getAuthToken() {
    return await step(`API. Получение токена от тестового юзера ${capperUser.email}`, async () => {
      const loginRequest = await axios
        .post(
          `${apiUrl}/auth/login`,
          {
            login: capperUser.email,
            password: capperUser.password
          },
          {
            headers: {
              sessid: 'autotestAPI'
            }
          }
        )
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          }
        })

      let body = await loginRequest.data
      let token = body.data.token

      return token
    })
  }

  async loginRequest(login, password) {
    return await step(`API. Получение токена юзера ${login}`, async () => {
      const loginRequest = await axios
        .post(
          `${apiUrl}/auth/login`,
          {
            login: login,
            password: password
          },
          {
            headers: {
              sessid: 'autotestAPI'
            }
          }
        )
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          }
        })

      let body = loginRequest.data
      let status = loginRequest.status

      return { body, status }
    })
  }
}
