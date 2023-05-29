import { createSlice } from '@reduxjs/toolkit'

export const formDataSlice = createSlice({
    name: 'formData',
    initialState: {
        value: {
            email: "",
            password: "",
        }
    },
    reducers: {
        all: (state, action) => {
            state.value = action.payload;
        }
    },
});

export const { all } = formDataSlice.actions;
export default formDataSlice.reducer;