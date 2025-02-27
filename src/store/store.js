import { configureStore } from "@reduxjs/toolkit";
import { userAPI } from "./api/user_api";
import { carReducer } from "./slice/car.slice";

export const store = configureStore({
  reducer: {
    [userAPI.reducerPath]: userAPI.reducer,
    cars: carReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([userAPI.middleware]),
});

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
