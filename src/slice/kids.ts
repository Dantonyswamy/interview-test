import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { KidsState } from '../types/state'
import {User} from '../types/users'

export const initialState: KidsState = { kids: [] }


export const kidsDataSlice = createSlice({
  name: 'kidUsers',
  initialState,
  reducers: {  
    requestKidsData: (state: KidsState) => {
      state.kids = []
    },
    fetchKidsData: (state: KidsState, action: PayloadAction<User[]>) => {
      state.kids = action.payload
    },
  },
})

export const { requestKidsData, fetchKidsData } = kidsDataSlice.actions