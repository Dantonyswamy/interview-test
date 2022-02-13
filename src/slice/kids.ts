import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { KidsDataSuccessPayload, KidsState } from '../types/state'

export const initialState: KidsState = { kids: [] }


export const kidsDataSlice = createSlice({
  name: 'kidUsers',
  initialState,
  reducers: {
    fetchKidsData: (state: KidsState) => {
      state.kids = []
    },
    fetchKidsDataSuccess: (state: KidsState, action: PayloadAction<KidsDataSuccessPayload>) => {
      state.kids = action.payload.kidsData
    },
  },
})

export const { fetchKidsData, fetchKidsDataSuccess } = kidsDataSlice.actions