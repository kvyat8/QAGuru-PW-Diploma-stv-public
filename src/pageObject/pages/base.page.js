import { step } from 'allure-js-commons'
export class BasePage {
  constructor(page) {
    this.page = page
  }
  async open(url) {
    await step(`Переход на страницу ${url}`, async () => {
      await this.page.goto(url)
    })
  }

  getUrl() {
    return this.page.url()
  }
}
