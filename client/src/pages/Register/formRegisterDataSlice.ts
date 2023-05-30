import { createSlice } from "@reduxjs/toolkit";

export const formRegisterDataSlice = createSlice({
    name: 'formRegisterData',
    initialState: {
        value: {
            email: '',
            username: '',
            password: '',
        },
    },
    reducers: {
        all: (state, actions) => {
            state.value = actions.payload
        }
    }
})

export const { all } = formRegisterDataSlice.actions
export default formRegisterDataSlice.reducer