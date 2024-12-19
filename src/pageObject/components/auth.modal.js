import { step } from 'allure-js-commons'
export class AuthModal {
  constructor(page) {
    ;(this.page = page),
      (this.loginModal = {
        emailField: this.page.locator('.AuthFormSignIn').getByPlaceholder('E-mail'),
        passwordField: this.page.locator('.AuthFormSignIn').getByPlaceholder('Пароль'),
        forgotPasswordButton: this.page.locator('.AuthFormSignIn').getByRole('button', { name: 'Забыли пароль?' }),
        loginButton: this.page.locator('.AuthFormSignIn').locator('form').getByRole('button', { name: 'Войти' }),
        registerButton: this.page.locator('.AuthFormSignIn').locator('form').getByRole('button', { name: 'Регистрация' })
      })
    this.registerModal = {
      emailField: this.page.locator('.AuthFormSignUp').getByPlaceholder('E-mail'),
      passwordField: this.page.locator('.AuthFormSignUp').getByPlaceholder('Пароль'),
      continueButton: this.page.locator('.AuthFormSignUp').locator('form').getByRole('button', { name: 'Продолжить' }),
      loginButton: this.page.locator('.AuthFormSignUp').locator('form').getByRole('button', { name: 'Войти' }),
      firstNameField: this.page.locator('.AuthFormSignUp').getByPlaceholder('Имя'),
      secondNameField: this.page.locator('.AuthFormSignUp').getByPlaceholder('Фамилия'),
      agreeCheckBox: this.page.locator('.AuthFormSignUp').getByLabel('Соглашаюсь с условиями использования'),
      registerButton: this.page.locator('.AuthFormSignUp').getByRole('button', { name: 'Зарегистрироваться' }),
      registrationConfirm: this.page.locator('.RegistrationConfirm')
    }
  }

  async loginInModal(email, password) {
    await step(`Логин с ${email}`, async () => {
      await this.loginModal.emailField.click()
      await this.loginModal.emailField.fill(email)
      await this.loginModal.passwordField.click()
      await this.loginModal.passwordField.fill(password)
      await this.loginModal.loginButton.click()
    })
  }

  async registerInModal(email, password, firstName, secondName) {
    await step(`Регистрация с ${email}`, async () => {
      await this.registerModal.emailField.click()
      await this.registerModal.emailField.fill(email)
      await this.registerModal.passwordField.click()
      await this.registerModal.passwordField.fill(password)
      await this.registerModal.continueButton.click()

      await this.registerModal.firstNameField.click()
      await this.registerModal.firstNameField.fill(firstName)
      await this.registerModal.secondNameField.click()
      await this.registerModal.secondNameField.fill(secondName)
      await this.registerModal.agreeCheckBox.click()
      await this.registerModal.registerButton.click()
    })
  }
}
