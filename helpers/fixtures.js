import { test as base } from '@playwright/test'
import { PageManager } from '../src/pageObject/page.manager'
import { ApiClient } from '../src/apiServices/api.client'
import { capperUser, baseUrl } from './constants'
import { step } from 'allure-js-commons'

export const test = base.extend({
  pm: async ({ page }, use) => {
    const pm = new PageManager(page)
    await page.setViewportSize({ width: 1800, height: 800 })
    await pm.basePage.open(baseUrl)
    await use(pm)
  },

  disablePromo: async ({ page }, use) => {
    const pm = new PageManager(page)
    await step('Отключение промо', async () => {
      await page.route('**/popup-campaigns', async (route) => {
        const json = {
          data: []
        }
        await route.fulfill({ json })
      })

      await page.route('**/promo/list?type=gift**', async (route) => {
        const json = {
          data: [],
          meta: {
            total: 0,
            limit: 50,
            offset: 0
          }
        }
        await route.fulfill({ json })
      })
    })

    await use(pm)
  },

  capperLogin: async ({ page }, use) => {
    const pm = new PageManager(page)
    await pm.header.openLoginPopup()
    await pm.authModal.loginInModal(capperUser.email, capperUser.password)
    await use(pm)
  },

  api: async ({}, use) => {
    const api = new ApiClient()
    await use(api)
  },

  apiAuth: async ({}, use) => {
    const api = new ApiClient()
    let token = await api.profileService.getAuthToken()
    await use(api)
  }
})

export { expect } from '@playwright/test'
export { step } from 'allure-js-commons'
