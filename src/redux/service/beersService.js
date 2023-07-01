import { API_BEER_ENDPOINT } from '../../utils/const'

export const fetchBeersService = async () => {
  try {
    const response = await fetch(API_BEER_ENDPOINT)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error('Failed to fetch beers')
  }
}
