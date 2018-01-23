import { CLOSED_POPUP, OPEN_POPUP } from '../constants'
import moment from 'moment'

export default (popUpState = {
  popUpState: false,
  popUpTitle: 'PopUp',
  targetOpenPopUp: null,
  typePopUp: {},
  editPost: {id: null, date: moment(), title: '', text: ''},
  isDone: false
}, action) => {
  const {type, payload} = action

  switch (type) {
    case OPEN_POPUP:
      return {
        ...popUpState,
        isOpenPopUp: true,
        popUpTitle: payload.titlePopUp,
        targetOpenPopUp: payload.targetOpenPopUp,
        typePopUp: payload.typePopUp,
        editPost: payload.editPost,
        isDone: false
      }
    case CLOSED_POPUP:
      return {...popUpState, isOpenPopUp: false, isDone: payload.isDone}
  }

  return popUpState
}
