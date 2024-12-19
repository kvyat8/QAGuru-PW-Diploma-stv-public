import { step } from 'allure-js-commons'
export class Header {
  constructor(page) {
    ;(this.page = page),
      (this.loginButton = this.page.locator('.header-container header').getByRole('button', { name: 'Войти' })),
      (this.registerButton = this.page.locator('.header-container header').getByRole('button', { name: 'Создать аккаунт' })),
      (this.userName = this.page.locator('.header-container header').locator('.user-name'))
  }

  async openSearchPopup() {
    await step(`Открыть поисковый попап`, async () => {
      await this.searchButton.click()
    })
  }

  async openLoginPopup() {
    await step(`Открыть модалку логина`, async () => {
      await this.loginButton.click()
    })
  }

  async openRegisterPopup() {
    await step(`Открыть модалку регистрации`, async () => {
      await this.registerButton.click()
    })
  }
}
