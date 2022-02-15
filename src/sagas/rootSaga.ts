import { all, fork } from '@redux-saga/core/effects'
import getKidsDataSaga from './getKidsData'

export function* rootSaga() {
  yield all([fork(getKidsDataSaga)])
}