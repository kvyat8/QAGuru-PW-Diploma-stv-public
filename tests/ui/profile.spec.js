import { UserBuilder } from '../../helpers/builders'
import { capperUser } from '../../helpers/constants'
import { test, expect, step } from '../../helpers/fixtures'

test.describe('Профиль', () => {
  test('Регистрация нового юзера', { tag: ['@UI'] }, async ({ disablePromo, pm }) => {
    const newUser = new UserBuilder().addFirstName().addSecondName().addEmail().addPassword().generate()
    await pm.header.openRegisterPopup()

    await pm.authModal.registerInModal(newUser.email, newUser.password, newUser.firstName, newUser.secondName)

    await expect(pm.authModal.registerModal.registrationConfirm).toBeVisible()
    await expect(pm.authModal.registerModal.registrationConfirm).toContainText(`${newUser.email}`)
  })

  test('Авторизация с корректными данными', { tag: ['@UI'] }, async ({ disablePromo, pm }) => {
    await pm.header.openLoginPopup()
    await pm.authModal.loginInModal(capperUser.email, capperUser.password)
    await expect(pm.header.userName).toContainText(`${capperUser.firstName} ${capperUser.secondName}`)
  })
})
