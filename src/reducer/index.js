import data from '../data'

const INITIAL_STATE = {
  data: data,
  dataCouple: data,
  ids: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_ID_CARD':
      return { 
        ...state,
        ids: action.ids
      }
    default:
      return state;
  }
}