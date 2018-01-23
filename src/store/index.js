import { applyMiddleware, compose, createStore } from 'redux'
import reducer from '../reducer/index'
import randomId from '../middlewares/randomId'

const enhancer = compose(
  applyMiddleware(randomId)
)

const store = createStore(reducer, {}, enhancer)

window.store = store

export default store
