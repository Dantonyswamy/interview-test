import { call, put, all, takeLatest } from 'redux-saga/effects'
import { User } from '../types/users'
import { requestSeniorsData, fetchSeniorsData } from '../slice/seniors'
import { getSeniorUsersFromApi } from '../connectivity/seniors-api'

export function* fetchSeniorsDataSaga() {
  try {
    const response: User[] = yield call(getSeniorUsersFromApi)    
    yield put(fetchSeniorsData(response))
  } catch (err) {
    console.log(err)
  }
}

function* getSeniorsDataSaga() {
  yield all([takeLatest(requestSeniorsData.type, fetchSeniorsDataSaga)])
}

export default getSeniorsDataSaga