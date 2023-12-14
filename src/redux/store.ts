import { configureStore } from "@reduxjs/toolkit"
import loginReducer from "./slice/Login/Login"
import movieReducer from "./slice/Movie/Movie"
import cinemaReducer from "./slice/Cinema/Cinema"
export const store = configureStore({
  reducer: {
    loginReducer,
    movieReducer,
    cinemaReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
