import { test, expect, step } from '../../helpers/fixtures'

test.describe('API Профиль', () => {
  test('Корректная авторизация профиля POST /auth/login', async ({ api }) => {
    let token = await api.profileService.getAuthToken()
    await step(`API. Валидация токена`, async () => {
      expect(typeof token === 'string').toBe(true)
    })
  })
})
