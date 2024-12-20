import { test, expect, step } from '../../helpers/fixtures'

test.describe('API Профиль', () => {
  test('Корректная авторизация профиля POST /auth/login', { tag: ['@API'] }, async ({ api }) => {
    let token = await api.profileService.getAuthToken()
    console.log(process.env)
    await step(`API. Валидация токена`, async () => {
      expect(typeof token === 'string').toBe(true)
    })
  })
})
