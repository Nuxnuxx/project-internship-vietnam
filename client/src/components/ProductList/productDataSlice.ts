import { createSlice } from '@reduxjs/toolkit'

export const productDataSlice = createSlice({
  name: 'productData',
  initialState: {
    value: {
    },
  },
  reducers: {
    all: (state, actions) => {
      state.value = actions.payload
    },
  },
})

export const { all } = productDataSlice.actions
export default productDataSlice.reducer
