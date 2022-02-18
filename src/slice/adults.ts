import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AdultsState } from '../types/state'
import {User} from '../types/users'

export const initialState: AdultsState = { adults: [] }


export const adultsDataSlice = createSlice({
  name: 'adultUsers',
  initialState,
  reducers: {  
    requestAdultsData: (state: AdultsState) => {
      state.adults = []
    },
    fetchAdultsData: (state: AdultsState, action: PayloadAction<User[]>) => {
      state.adults = action.payload
    },
  },
})

export const { requestAdultsData, fetchAdultsData } = adultsDataSlice.actions