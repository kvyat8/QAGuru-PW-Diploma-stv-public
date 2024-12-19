import { step } from 'allure-js-commons'
import { BasePage } from './base.page'
export class MainPage extends BasePage {
  constructor(page) {
    super(page),
      (this.topMatchesLargeCard = this.page.locator('.TopMatches').locator('.large-cards').locator('.TopMatchesItem--large')),
      (this.topMatchesSmallCard = this.page.locator('.TopMatches').locator('.small-cards')),
      (this.topMatchesCard = this.page.locator('_vue=TopMatches').locator('_vue=TopMatchesItem')),
      (this.mainPageHeader = this.page.locator('_vue=MainPageHeader'))
  }

  async openTopMatchCardByNumber(number) {
    await step(`Открыть ${number} топ матч на главной`, async () => {
      await this.topMatchesCard.nth(number).click()
    })
  }
}
