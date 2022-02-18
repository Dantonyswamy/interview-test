import { all, fork } from '@redux-saga/core/effects'
import getKidsDataSaga from './getKidsData'
import getAdultsDataSaga from './getAdultsData'
import getSeniorsDataSaga from './getSeniorsData'

export function* rootSaga() {
  yield all([fork(getKidsDataSaga), fork(getAdultsDataSaga), fork(getSeniorsDataSaga)])
}