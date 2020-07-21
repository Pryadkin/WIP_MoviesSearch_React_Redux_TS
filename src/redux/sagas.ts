import { put, takeEvery, call } from 'redux-saga/effects';
import { fetchMovies } from '../api/fetchMovies';
import { searchMovie, SEARCH_MOVIE_ASINC } from './actions';
import { TSearchMovieAsinc } from './actionsTypes';


function* getMovies({ payload }: TSearchMovieAsinc) {
  const data = yield call(() => fetchMovies(payload.name, payload.isWith, payload.page));
  yield put(searchMovie(data));
}

export default function* rootSaga() {
  yield takeEvery(SEARCH_MOVIE_ASINC, getMovies)
}