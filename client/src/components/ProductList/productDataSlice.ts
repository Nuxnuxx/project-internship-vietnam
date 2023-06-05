import { createSlice } from '@reduxjs/toolkit'

interface ProductDataState {
  value: Product[]
}

const initialState: ProductDataState = {
  value: [],
}

export const productDataSlice = createSlice({
  name: 'productData',
  initialState,
  reducers: {
    all: (state, actions) => {
      state.value = actions.payload
    },
  },
})

export const { all } = productDataSlice.actions
export default productDataSlice.reducer
