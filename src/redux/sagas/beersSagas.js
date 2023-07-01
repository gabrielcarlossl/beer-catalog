import { call, put, takeEvery } from 'redux-saga/effects'

import { fetchBeersSuccess, fetchBeersFailure } from '../actions/beerActions.js'
import { fetchBeersService } from '../service/beersService.js'
import { FETCH_BEERS_REQUEST } from '../types'

function* fetchBeersSaga() {
  try {
    const beers = yield call(fetchBeersService) 
    yield put(fetchBeersSuccess(beers))
  } catch (error) {
    yield put(fetchBeersFailure(error.message))
  }
}

export default function * beerSaga() {
  yield takeEvery(FETCH_BEERS_REQUEST, fetchBeersSaga)
}


