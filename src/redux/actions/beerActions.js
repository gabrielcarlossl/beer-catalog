import * as types from '../types/index'

export const fetchBeersRequest = () => ({
  type: types.FETCH_BEERS_REQUEST,
})

export const fetchBeersSuccess = (beers) => ({
  type: types.FETCH_BEERS_SUCCESS,
  payload: beers,
})

export const fetchBeersFailure = (error) => ({
  type: types.FETCH_BEERS_FAILURE,
  payload: error,
})
