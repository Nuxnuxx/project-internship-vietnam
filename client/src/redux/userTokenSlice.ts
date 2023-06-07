import { createSlice } from '@reduxjs/toolkit'

export const userTokenSlice = createSlice({
  name: 'userToken',
  initialState: { value: {
    token: undefined
  } },
  reducers: {
    set: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { set } = userTokenSlice.actions
export default userTokenSlice.reducer
