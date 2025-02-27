import { configureStore } from "@reduxjs/toolkit";
import { userAPI } from "./api/user_api";
import { fuelTypeAPI } from "./api/fuel_type_api";
import { carMakeAPI } from "./api/car_make_api";
import { carModelAPI } from "./api/car_model_api";
import { carEngineAPI } from "./api/car_engine_api";
import { carAPI } from "./api/car_api";
import { locationAPI } from "./api/location_api";
import { countryAPI } from "./api/country_api";
import { carTransmissionAPI } from "./api/car_trasmission_api";
import { consultationAPI } from "./api/consultation_api";
import { inquiryAPI } from "./api/inquiry_api";
import { mediaAPI } from "./api/media_api";
import { carReducer } from "../store/slice/car.slice";

export const store = configureStore({
  reducer: {
    [userAPI.reducerPath]: userAPI.reducer,
    [fuelTypeAPI.reducerPath]: fuelTypeAPI.reducer,
    [carMakeAPI.reducerPath]: carMakeAPI.reducer,
    [carModelAPI.reducerPath]: carModelAPI.reducer,
    [carEngineAPI.reducerPath]: carEngineAPI.reducer,
    [carAPI.reducerPath]: carAPI.reducer,
    [locationAPI.reducerPath]: locationAPI.reducer,
    [countryAPI.reducerPath]: countryAPI.reducer,
    [carTransmissionAPI.reducerPath]: carTransmissionAPI.reducer,
    [consultationAPI.reducerPath]: consultationAPI.reducer,
    [inquiryAPI.reducerPath]: inquiryAPI.reducer,
    [mediaAPI.reducerPath]: mediaAPI.reducer,
    cars: carReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      userAPI.middleware,
      fuelTypeAPI.middleware,
      carMakeAPI.middleware,
      carModelAPI.middleware,
      carEngineAPI.middleware,
      carTransmissionAPI.middleware,
      carAPI.middleware,
      locationAPI.middleware,
      inquiryAPI.middleware,
      consultationAPI.middleware,
      countryAPI.middleware,
      mediaAPI.middleware,
    ]),
});

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
