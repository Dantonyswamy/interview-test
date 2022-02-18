import { call, put, all, takeLatest } from 'redux-saga/effects'

import { User } from '../types/users'
import { requestAdultsData, fetchAdultsData } from '../slice/adults'
import { getAdultUsersFromApi } from '../connectivity/adults-api'

export function* fetchAdultsDataSaga() {
  try {
    const response: User[] = yield call(getAdultUsersFromApi)    
    yield put(fetchAdultsData(response))
  } catch (err) {
    console.log(err)
  }
}

function* getAdultsDataSaga() {
  yield all([takeLatest(requestAdultsData.type, fetchAdultsDataSaga)])
}

export default getAdultsDataSaga