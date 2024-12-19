import { faker } from '@faker-js/faker'
import { apiUrl, capperUser } from '../../helpers/constants'
import axios from 'axios'
import { step } from 'allure-js-commons'

export class PredictionService {
  constructor() {}

  async postPrediction(token, type, outcome, text, matchId, sum) {
    return await step(`API. Публикация прогноза ${type} ${outcome}`, async () => {
      const postPredictionRequest = await axios
        .post(
          `${apiUrl}/predictions`,
          {
            clientType: 'site 2',
            type: type,
            outcome: outcome,
            amount: sum,
            comment: text,
            matchId: matchId
          },
          {
            headers: {
              'Content-Type': 'application/json',
              authorization: `Bearer ${token}`,
              sessId: 'autotestAPI'
            }
          }
        )
        .catch(function (error) {
          if (error.response) {
            console.log(matchId)
            console.log(type)
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          }
        })

      let body = await postPredictionRequest.data
      let status = await postPredictionRequest.status

      return { body, status }
    })
  }

  async editPrediction(token, text, id) {
    return await step(`API. Редактирование прогноза ${id}`, async () => {
      const editPredictionRequest = await axios
        .put(
          `${apiUrl}/predictions`,
          {
            comment: text,
            id: id
          },
          {
            headers: {
              'Content-Type': 'application/json',
              authorization: `Bearer ${token}`,
              sessId: 'autotestAPI'
            }
          }
        )
        .catch(function (error) {
          if (error.response) {
            console.log(id)
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          }
        })

      let body = await editPredictionRequest.data
      let status = await editPredictionRequest.status

      return { body, status }
    })
  }
}
