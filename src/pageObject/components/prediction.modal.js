import { step } from 'allure-js-commons'
export class PredictionModal {
  constructor(page) {
    ;(this.page = page),
      (this.predictionCreateModal = {
        textArea: this.page.getByPlaceholder('Введи обоснование прогноза. Минимальная длина – 50'),
        sumInput: this.page.locator('.wrapper').locator('input[name="text"]'),
        submitButton: this.page.getByText('Создать прогноз')
      })

    this.succesPredictionCreateModal = {
      toPredictionButton: this.page.getByText('Перейти к прогнозу'),
      succesButton: this.page.locator('.success-button'),
      editPredictionButton: this.page.getByText('Редактировать')
    }

    this.predictionEditModal = {
      textArea: this.page.getByPlaceholder('Введи обоснование прогноза. Минимальная длина – 50'),
      submitButton: this.page.getByRole('button', { name: 'Редактировать обоснование' })
    }
  }

  async createPrediction(text) {
    await step(`Создание прогноза через модалку`, async () => {
      await this.predictionCreateModal.textArea.click()
      await this.predictionCreateModal.textArea.fill(text)
      await this.predictionCreateModal.submitButton.click()
    })
  }

  async goToPrediction() {
    await step(`Переход к карточке прогноза`, async () => {
      await this.succesPredictionCreateModal.toPredictionButton.click()
    })
  }

  async goToEditPrediction() {
    await step(`Переход к редактированию прогноза`, async () => {
      await this.succesPredictionCreateModal.editPredictionButton.click()
    })
  }

  async editPrediction(text) {
    await step(`Редактирование прогноза в модалке`, async () => {
      await this.predictionEditModal.textArea.fill(text)
      await this.predictionEditModal.submitButton.click()
      await this.succesPredictionCreateModal.succesButton.click()
    })
  }
}
