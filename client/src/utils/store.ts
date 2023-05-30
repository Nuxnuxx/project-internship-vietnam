import { configureStore } from '@reduxjs/toolkit'
import userToken from '../redux/userTokenSlice'
import formLoginData from '../pages/Login/formLoginDataSlice'
import formRegisterData from '../pages/Register/formRegisterDataSlice'

const store = configureStore({
  reducer: { userToken, formLoginData, formRegisterData },
})
export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
