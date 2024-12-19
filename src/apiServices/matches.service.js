import { apiUrl } from '../../helpers/constants'
import { faker } from '@faker-js/faker'
import axios from 'axios'
import { step } from 'allure-js-commons'

export class MatchesService {
  constructor(request) {
    this.request = request
  }

  async getRandomTopMatch() {
    return await step(`API. Получение рандомного топ матча`, async () => {
      const topMatchesResponse = await axios.get(`${apiUrl}/matches/top`).catch(function (error) {
        if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
      })
      let topMatchesResponseData = topMatchesResponse.data.data
      let topMatchesQuantity = topMatchesResponseData.length

      let matchSlug = topMatchesResponseData[faker.number.int({ min: 0, max: topMatchesQuantity - 1 })].slug
      let matchId = topMatchesResponseData[faker.number.int({ min: 0, max: topMatchesQuantity - 1 })].id

      return { matchSlug, matchId }
    })
  }

  async getRandomMatch(date) {
    return await step(`API. Получение рандомного матча за ${date}`, async () => {
      const matchCenterResponse = await axios
        .get(
          `${apiUrl}/matches/center?dateFrom=${date}&dateTo=${date}&onlyTopLeagues=true&status=upcoming&withHigherTopLeagues=false&sort=match_date_asc&offset=0&limit=15`
        )
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          }
        })
      let matchCenterResponseArray = matchCenterResponse.data.data
      // let matchCenterQuantity = topMatchesResponseData.length

      let randomIndex = Math.floor(Math.random() * matchCenterResponseArray.length)
      const randomLeague = matchCenterResponseArray[randomIndex]
      const randomLeagueMatchesArray = randomLeague.matches

      randomIndex = Math.floor(Math.random() * randomLeagueMatchesArray.length)
      const randomatch = randomLeagueMatchesArray[randomIndex]

      let matchSlug = randomatch.slug
      let matchId = randomatch.id

      return { matchSlug, matchId }
    })
  }

  async getRandomMatchOutcome(slug) {
    return await step(`API. Получение рандомного исхода для ${slug}`, async () => {
      const oddsRequest = await axios.get(`${apiUrl}/matches/${slug}/odds`).catch(function (error) {
        if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
      })
      const oddsData = oddsRequest.data.data.odds

      const typeArray = Object.keys(oddsData)
      const randomTypeIndex = Math.floor(Math.random() * typeArray.length)
      const randomType = typeArray[randomTypeIndex]
      const randomTypeObject = oddsData[randomType]

      const outcomesArray = Object.keys(randomTypeObject)
      const randomOutcomeIndex = Math.floor(Math.random() * outcomesArray.length)
      const randomOutcome = outcomesArray[randomOutcomeIndex]
      const randomOutcomeObject = randomTypeObject[randomOutcome]

      let type = randomOutcomeObject.type
      let outcome = randomOutcomeObject.outcome

      return { type, outcome }
    })
  }

  async matchCenterGet(date, sport = '') {
    return await step(`API. Получение матч-центра для ${sport} за ${date}`, async () => {
      const matchCenterResponse = await axios
        .get(
          `${apiUrl}/matches/center?dateFrom=${date}&dateTo=${date}&sport=${sport}&onlyTopLeagues=true&status=upcoming&withHigherTopLeagues=false&sort=match_date_asc&offset=0&limit=15`
        )
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          }
        })

      let body = matchCenterResponse.data
      let status = matchCenterResponse.status

      return { body, status }
    })
  }
}
