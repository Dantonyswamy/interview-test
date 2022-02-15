import { configureStore, Middleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { rootSaga } from './sagas/rootSaga'
import createSagaMiddleware from '@redux-saga/core'

import { kidsDataSlice } from './slice/kids'

export const rootReducer = {
  kidsData: kidsDataSlice.reducer,
}

export const initStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware, logger as Middleware],
    devTools: process.env.NODE_ENV !== 'production',
  })
  sagaMiddleware.run(rootSaga)
  return store
}