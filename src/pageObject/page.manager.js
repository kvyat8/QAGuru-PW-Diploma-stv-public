import { Header } from './index'
import { BasePage } from './index'
import { MainPage } from './index'
import { MatchPage } from './index'
import { AuthModal } from './index'
import { PredictionModal } from './index'

export class PageManager {
  constructor(page) {
    this.basePage = new BasePage(page)
    this.header = new Header(page)
    this.authModal = new AuthModal(page)
    this.predictionModal = new PredictionModal(page)
    this.mainPage = new MainPage(page)
    this.matchPage = new MatchPage(page)
  }
}
