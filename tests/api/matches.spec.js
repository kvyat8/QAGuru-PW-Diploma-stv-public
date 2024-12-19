import { test, expect, step } from '../../helpers/fixtures'
import { sportsArray } from '../../helpers/constants'

let date = new Date().toLocaleDateString('en-ca')

test.describe('API Матч-центр', () => {
  test('API Матч-центр. Приходит массив матчей GET /matches/center', async ({ api }) => {
    let matchCenterResponse = await api.matchService.matchCenterGet(date)
    await step('API. Валидация прихода массива ', async () => {
      expect(Array.isArray(matchCenterResponse.body.data)).toBe(true)
      expect(matchCenterResponse.status).toBe(200)
    })
  })

  test('API Матч-центр по видам спорта. Приходит массив матчей GET /matches/center', async ({ api }) => {
    for (let sport of sportsArray) {
      let matchCenterResponse = await api.matchService.matchCenterGet(date, sport)
      await step(`API. Валидация прихода массива матч-центра по ${sport}`, async () => {
        expect(Array.isArray(matchCenterResponse.body.data)).toBe(true)
        expect(matchCenterResponse.status).toBe(200)
      })
    }
  })
})
