import { faker } from '@faker-js/faker'
import { apiUrl, capperUser } from '../../helpers/constants'
import axios from 'axios'
import { step } from 'allure-js-commons'

export class CommentService {
  constructor() {}

  async createComment(token, text, entityType, entityId) {
    return await step(`API. Создание коммента ${entityType} ${entityId}`, async () => {
      const postCommentRequest = await axios
        .post(
          `${apiUrl}/comments`,
          { entityId: entityId, entityType: entityType, text: text },
          {
            headers: {
              'Content-Type': 'application/json',
              authorization: `Bearer ${token}`,
              sessId: 'autotestAPI'
            }
          }
        )
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          }
        })
      let body = postCommentRequest.data
      let status = postCommentRequest.status

      return { body, status }
    })
  }

  async editComment(token, id, text) {
    return await step(`API. Редактирование коммента ${id}`, async () => {
      const editCommentRequest = await axios
        .put(
          `${apiUrl}/comments`,
          { id: id, text: text },
          {
            headers: {
              'Content-Type': 'application/json',
              authorization: `Bearer ${token}`,
              sessId: 'autotestAPI'
            }
          }
        )
        .catch(function (error) {
          if (error.response) {
            console.log(id)
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          }
        })

      let body = await editCommentRequest.data
      let status = await editCommentRequest.status

      return { body, status }
    })
  }

  async deleteComment(token, id) {
    return await step(`API. Удаление коммента ${id}`, async () => {
      const deleteCommentRequest = await axios
        .delete(`${apiUrl}/comments?id=${id}`, {
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
            sessId: 'autotestAPI'
          }
        })
        .catch(function (error) {
          if (error.response) {
            console.log(id)
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          }
        })
      let body = deleteCommentRequest.data
      let status = deleteCommentRequest.status

      return { body, status }
    })
  }
}
