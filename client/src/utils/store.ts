import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userToken from '../redux/userTokenSlice'
import formLoginData from '../pages/Login/formLoginDataSlice'
import formRegisterData from '../pages/Register/formRegisterDataSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  userToken: persistReducer(persistConfig, userToken),
  formLoginData,
  formRegisterData,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
