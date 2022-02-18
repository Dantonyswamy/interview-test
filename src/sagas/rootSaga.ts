import { all, fork } from '@redux-saga/core/effects'
import getKidsDataSaga from './getKidsData'
import getAdultsDataSaga from './getAdultsData'

export function* rootSaga() {
  yield all([fork(getKidsDataSaga), fork(getAdultsDataSaga)])
}