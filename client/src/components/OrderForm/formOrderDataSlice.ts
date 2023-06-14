import { createSlice } from '@reduxjs/toolkit'

export const formOrderDataSlice = createSlice({
  name: 'formOrderData',
  initialState: {
    value: {
      firstname: '',
      lastname: '',
      email: '',
      adress: '',
      detail: '',
      zipcode: '',
      country: '',
      token: '',
    },
  },
  reducers: {
    all: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { all } = formOrderDataSlice.actions
export default formOrderDataSlice.reducer
