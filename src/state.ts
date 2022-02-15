import { initStore } from './store'

export const store = initStore()

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>