import { ADD_POST, DELETE_POST, EDIT_POST } from '../constants'
import moment from 'moment'

let postsDefault = [{
  id: 15134597052947,
  date: moment(),
  title: 'Title',
  text: '(o_O)'
}]

export default (posts = postsDefault, action) => {
  const {type, payload, randomId} = action

  switch (type) {
    case ADD_POST:
      return [...posts, {
        id: randomId,
        ...payload.post
      }]

    case EDIT_POST:
      return posts.reduce((acc, next) => {
        if (next.id === payload.id) {
          return [...acc, {...payload}]
        }

        return [...acc, next]
      }, [])
    case DELETE_POST:
      return posts.filter((post) => {
        if (post.id !== payload) return true
      })
  }

  return posts
}
