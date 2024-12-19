import { PredictionTextBuilder } from '../../helpers/builders'
import { test, expect, step } from '../../helpers/fixtures'

test.describe('Прогнозы', () => {
  test('Создание прогноза', async ({ disablePromo, pm, capperLogin }) => {
    const prediction = new PredictionTextBuilder().addText().addNewText().setMatchNumber().generate()

    await pm.mainPage.openTopMatchCardByNumber(prediction.matchNumber)
    await pm.matchPage.openWin1Modal()

    await pm.predictionModal.createPrediction(prediction.text)
    await pm.predictionModal.goToPrediction()
    await step('Карточка прогноза отображается и содержит текст прогноза', async () => {
      await expect(pm.matchPage.mainTab.ownPredictionCard.text).toContainText(prediction.text)
      await expect(pm.matchPage.mainTab.ownPredictionCard.text).toBeVisible()
    })
  })

  test('Редактирование прогноза сразу после создания', async ({ disablePromo, pm, capperLogin }) => {
    const prediction = new PredictionTextBuilder().addText().addNewText().setMatchNumber().generate()

    await pm.mainPage.openTopMatchCardByNumber(prediction.matchNumber)
    await pm.matchPage.openWin1Modal()

    await pm.predictionModal.createPrediction(prediction.text)
    await pm.predictionModal.goToEditPrediction()
    await pm.predictionModal.editPrediction(prediction.newText)
    await step('Карточка прогноза отображается и содержит новый текст прогноза', async () => {
      await expect(pm.matchPage.mainTab.ownPredictionCard.text).toContainText(prediction.newText)
    })
  })

  test('Редактирование прогноза на странице матча', async ({ disablePromo, pm, capperLogin }) => {
    const prediction = new PredictionTextBuilder().addText().addNewText().setMatchNumber().generate()

    await pm.mainPage.openTopMatchCardByNumber(prediction.matchNumber)
    await pm.matchPage.openWin1Modal()

    await pm.predictionModal.createPrediction(prediction.text)
    await pm.predictionModal.goToPrediction()

    await pm.matchPage.openEditmodal()
    await pm.predictionModal.editPrediction(prediction.newText)

    await step('Карточка прогноза отображается и содержит новый текст прогноза', async () => {
      await expect(pm.matchPage.mainTab.ownPredictionCard.text).toContainText(prediction.newText)
    })
  })
})
