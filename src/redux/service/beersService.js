import { API_BEER_ENDPOINT } from '../../utils/const'

export const fetchBeersService = async () => {
  try {
    const response = await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=4')
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error('Failed to fetch beers')
  }
}
