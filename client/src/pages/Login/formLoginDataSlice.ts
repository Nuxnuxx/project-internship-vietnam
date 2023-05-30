import { createSlice } from '@reduxjs/toolkit'

export const formLoginDataSlice = createSlice({
  name: 'formLoginData',
  initialState: {
    value: {
      email: '',
      password: '',
    },
  },
  reducers: {
    all: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { all } = formLoginDataSlice.actions
export default formLoginDataSlice.reducer
