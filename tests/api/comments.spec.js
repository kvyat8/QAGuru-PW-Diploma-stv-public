import { test, expect, step } from '../../helpers/fixtures'
import { PredictionTextBuilder } from '../../helpers/builders'

let date = new Date().toLocaleDateString('en-ca')

test.describe('API Комментарии', () => {
  test('API Создание комментария на матч POST', { tag: ['@API'] }, async ({ apiAuth, api }) => {
    let comment = new PredictionTextBuilder().addText().generate()
    let token = await api.profileService.getAuthToken()

    const match = await api.matchService.getRandomMatch(date)

    let postCommentRequest = await api.commentService.createComment(token, comment.text, 'Match', match.matchId)
    await step('API. Проверка текста комментария', async () => {
      expect(postCommentRequest.body.data.text).toBe(comment.text)
      expect(postCommentRequest.status).toBe(200)
    })
  })

  test('API Редактирование комментария на матч PUT', { tag: ['@API'] }, async ({ api }) => {
    let comment = new PredictionTextBuilder().addText().addNewText().generate()
    let token = await api.profileService.getAuthToken()
    const match = await api.matchService.getRandomMatch(date)

    let postCommentRequest = await api.commentService.createComment(token, comment.text, 'Match', match.matchId)

    setTimeout(() => {}, 20)

    let putCommentRequest = await api.commentService.editComment(token, postCommentRequest.body.data.id, comment.newText)
    await step('API. Проверка текста комментария', async () => {
      expect(putCommentRequest.body.data.text).toBe(comment.newText)
      expect(putCommentRequest.status).toBe(200)
    })
  })

  test('Удаление комментария на матч DELETE', { tag: ['@API'] }, async ({ api }) => {
    let comment = new PredictionTextBuilder().addText().generate()
    let token = await api.profileService.getAuthToken()

    const match = await api.matchService.getRandomMatch(date)

    let postCommentRequest = await api.commentService.createComment(token, comment.text, 'Match', match.matchId)

    setTimeout(() => {}, 200)

    let deleteCommentRequest = await api.commentService.deleteComment(token, postCommentRequest.body.data.id)
    await step('API. Проверка текста комментария', async () => {
      expect(deleteCommentRequest.body.data[0][0]).toBe(postCommentRequest.body.data.id)
      expect(deleteCommentRequest.status).toBe(200)
    })
  })
})
