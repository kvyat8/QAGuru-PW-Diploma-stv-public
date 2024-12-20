import { test, expect, step } from '../../helpers/fixtures'
import { PredictionTextBuilder } from '../../helpers/builders'

let date = new Date().toLocaleDateString('en-ca')

test.describe('API Прогнозы', () => {
  test('API Создание прогноза POST', { tag: ['@API'] }, async ({ api }) => {
    let prediction = new PredictionTextBuilder().addText().generate()

    const match = await api.matchService.getRandomMatch(date)
    const odds = await api.matchService.getRandomMatchOutcome(match.matchSlug)
    let token = await api.profileService.getAuthToken()

    let postPredictionRequest = await api.predictionService.postPrediction(token, odds.type, odds.outcome, prediction.text, match.matchId, 1000)
    await step(`API. Валидация запроса создания прогноза на матч ${match.matchId}`, async () => {
      expect(postPredictionRequest.body.data.comment).toBe(prediction.text)
      expect(postPredictionRequest.status).toBe(200)
    })
  })

  test('API Редактирование прогноза PUT', { tag: ['@API'] }, async ({ api }) => {
    let prediction = new PredictionTextBuilder().addText().addNewText().generate()

    const match = await api.matchService.getRandomMatch(date)
    const odds = await api.matchService.getRandomMatchOutcome(match.matchSlug)
    let token = await api.profileService.getAuthToken()

    let postPredictionRequest = await api.predictionService.postPrediction(token, odds.type, odds.outcome, prediction.text, match.matchId, 1000)

    let editPredictionRequest = await api.predictionService.editPrediction(token, prediction.newText, postPredictionRequest.body.data.id)

    await step(`API. Валидация измененного прогноза на матч ${match.matchId}`, async () => {
      expect(editPredictionRequest.body.data.comment).toBe(prediction.newText)
      expect(editPredictionRequest.status).toBe(200)
    })
  })
})
