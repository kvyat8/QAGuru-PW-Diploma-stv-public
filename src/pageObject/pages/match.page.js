import { step } from 'allure-js-commons'
import { BasePage } from './base.page'

// import { step } from "allure-js-commons"
export class MatchPage extends BasePage {
  constructor(page) {
    super(page),
      (this.line = {
        win1: this.page.getByRole('button', { name: 'Победа 1' }),
        win2: this.page.getByRole('button', { name: 'Победа 2' })
      }),
      (this.mainTab = {
        ownPredictionCard: {
          text: this.page.locator('.PredictionsItem--own .prediction-text'),
          editButton: this.page.locator('.PredictionsItemFooter > .Button')
        }
      })
    ;(this.topMatchesSmallCard = this.page.locator('.TopMatches').locator('.small-cards')),
      (this.topMatchesCard = this.page.locator('_vue=TopMatches').locator('_vue=TopMatchesItem')),
      (this.mainPageHeader = this.page.locator('_vue=MainPageHeader'))
  }

  async openWin1Modal() {
    await step(`Открыть win1 создание прогноза`, async () => {
      await this.line.win1.click()
    })
  }

  async openWin2Modal() {
    await step(`Открыть win2 создание прогноза`, async () => {
      await this.line.win2.click()
    })
  }

  async openEditmodal() {
    await step(`Открыть модалку редактирования прогноза`, async () => {
      await this.mainTab.ownPredictionCard.editButton.click()
    })
  }
}
