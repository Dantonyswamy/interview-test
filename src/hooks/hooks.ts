import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { RootState, AppDispatch } from '../state'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()