import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SeniorsState } from '../types/state'
import {User} from '../types/users'

export const initialState: SeniorsState = { seniors: [] }


export const seniorsDataSlice = createSlice({
  name: 'seniorUsers',
  initialState,
  reducers: {  
    requestSeniorsData: (state: SeniorsState) => {
      state.seniors = []
    },
    fetchSeniorsData: (state: SeniorsState, action: PayloadAction<User[]>) => {
      state.seniors = action.payload
    },
  },
})

export const { requestSeniorsData, fetchSeniorsData } = seniorsDataSlice.actions