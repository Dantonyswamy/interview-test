import { call, put, all, takeLatest } from 'redux-saga/effects'

import { User } from '../types/users'
import { fetchKidsData } from '../slice/kids'
import { getKidUsersFromApi } from '../connectivity/kids-api'

export function* fetchKidsDataSaga() {
  try {
    const response: User[] = yield call(getKidUsersFromApi)
    yield put(fetchKidsData(response))
  } catch (err) {
    console.log(err)
  }
}

function* getKidsDataSaga() {
  yield all([takeLatest(fetchKidsData.type, fetchKidsDataSaga)])
}

export default getKidsDataSaga