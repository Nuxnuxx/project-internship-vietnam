import { createSlice } from '@reduxjs/toolkit'

export const userTokenSlice = createSlice({
  name: 'userToken',
  initialState: { value: undefined },
  reducers: {
    get: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { get } = userTokenSlice.actions
export default userTokenSlice.reducer
