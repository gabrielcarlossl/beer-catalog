import * as types from '../types/index'

export const fetchBeersRequest = () => {
  return {
    type: types.FETCH_BEERS_REQUEST,
  }
}
export const fetchBeersSuccess = (beers) => {
  return {
    type: types.FETCH_BEERS_SUCCESS,
    payload: beers,
  }
}
export const fetchBeersFailure = (error) => {
  return {
    type: types.FETCH_BEERS_FAILURE,
    payload: error,
  }
}
