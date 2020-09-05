import { put, takeEvery, call } from 'redux-saga/effects';
import { fetchMovies } from '../api/fetchMovies';
import { fetchDetails } from '../api/fetchDetails';
import {
  searchMovie,
  addDetails,
  SEARCH_MOVIE_ASINC,
  ADD_DETAILS_ASINC
} from './actions';

//  types
import { TSearchMovieAsinc, TAddDetailsAsinc } from './actionsTypes';

function* getMovies({ payload }: TSearchMovieAsinc) {
  try {
    const data = yield call(() => fetchMovies(payload.name, payload.isWith, payload.page));
    yield put(searchMovie(data));
  } catch (error) {
    alert(error);
  }
}

export interface IGetDetails {
  id: number
}

function* getDetails({ payload }: TAddDetailsAsinc) {
  try {
    const data = yield call(() => fetchDetails(payload));
    yield put(addDetails(data));
  } catch (error) {
    alert(error);
  }
}

export default function* rootSaga() {
  yield takeEvery(SEARCH_MOVIE_ASINC, getMovies)
  yield takeEvery(ADD_DETAILS_ASINC, getDetails)
}