import { ADD_POST, CLOSED_POPUP, DELETE_POST, EDIT_POST, OPEN_POPUP } from '../constants'

export function addPost (post) {
  return {
    type: ADD_POST,
    payload: {post},
    generateId: true
  }
}

export function editPost (post) {
  return {
    type: EDIT_POST,
    payload: {...post}
  }
}

export function deletePost (id) {
  return {
    type: DELETE_POST,
    payload: id
  }
}

export function openPopUp (typePopUp, titlePopUp, targetOpenPopUp, editPost = {}) {
  return {
    type: OPEN_POPUP,
    payload: {typePopUp, titlePopUp, targetOpenPopUp, editPost}
  }
}

export function closedPopUp (isDone) {
  return {
    type: CLOSED_POPUP,
    payload: {isDone}
  }
}
