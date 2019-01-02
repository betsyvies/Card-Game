import data from '../data'

const INITIAL_STATE = {
  data: data,
  ids: [],
  cardsRandom: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_ID_CARD':
      return { 
        ...state,
        ids: action.ids
      }
    case 'CHANGE_DATA':
      return { 
        ...state,
        data: action.data
      }
    case 'GET_CARD_RANDOM':
      return { 
        ...state,
        cardsRandom: action.cardsRandom
      }
    default:
      return state;
  }
}