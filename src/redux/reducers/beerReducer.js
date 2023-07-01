import * as types from '../types/index'

const initialState = {
  beers: [],
  loading: false,
  error: null,
}

const beerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_BEERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case types.FETCH_BEERS_SUCCESS:
      return {
        ...state,
        beers: action.payload,
        loading: false,
        error: null,
      }
    case types.FETCH_BEERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default beerReducer
