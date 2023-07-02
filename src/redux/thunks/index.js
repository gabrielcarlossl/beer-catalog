import {
  fetchBeersRequest,
  fetchBeersSuccess,
  fetchBeersFailure,
} from '../actions/beerActions'

export const fetchBeers = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchBeersRequest())
      const response = await fetch('https://api.punkapi.com/v2/beers')

      if (!response.ok) {
        throw new Error('Erro ao buscar as cervejas')
      }

      const data = await response.json()
      dispatch(fetchBeersSuccess(data))
    } catch (error) {
      dispatch(fetchBeersFailure(error.message))
    }
  }
}
