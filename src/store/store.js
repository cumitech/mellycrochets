import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { userAPI } from "./api/user_api";
import { crochetAPI } from "./api/crochet_api";
import { crochetTypeAPI } from "./api/crochet_type_api";
import { postAPI } from "./api/post_api";
import { categoryAPI } from "./api/category_api";
import { sizeAPI } from "./api/size_api";
import { cartItemAPI } from "./api/cart_item_api";
import { currencyReducer } from "./slice/currency.slice";
import { paymentMethodReducer } from "./slice/payment.slice";
import { crochetReducer } from "./slice/crochet.slice";
import { tagAPI } from "./api/tag_api";
import { commentAPI } from "./api/comment_api";
import { orderAPI } from "./api/order_api";
import { orderItemAPI } from "./api/order_item_api";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["currency", "paymentMethod", "crochets"], // Reducers to persist
};

// Wrap Reducers with Persist
const persistedCurrencyReducer = persistReducer(persistConfig, currencyReducer);
const persistedPaymentMethodReducer = persistReducer(
  persistConfig,
  paymentMethodReducer
);
const persistedCrochetReducer = persistReducer(persistConfig, crochetReducer);

export const store = configureStore({
  reducer: {
    [userAPI.reducerPath]: userAPI.reducer,
    [crochetAPI.reducerPath]: crochetAPI.reducer,
    [crochetTypeAPI.reducerPath]: crochetTypeAPI.reducer,
    [categoryAPI.reducerPath]: categoryAPI.reducer,
    [postAPI.reducerPath]: postAPI.reducer,
    [sizeAPI.reducerPath]: sizeAPI.reducer,
    [cartItemAPI.reducerPath]: cartItemAPI.reducer,
    [tagAPI.reducerPath]: tagAPI.reducer,
    [commentAPI.reducerPath]: commentAPI.reducer,
    [orderAPI.reducerPath]: orderAPI.reducer,
    [orderItemAPI.reducerPath]: orderItemAPI.reducer,
    crochets: persistedCrochetReducer,
    paymentMethod: persistedPaymentMethodReducer,
    currency: persistedCurrencyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Ignore redux-persist actions
      },
    }).concat([
      userAPI.middleware,
      categoryAPI.middleware,
      crochetTypeAPI.middleware,
      crochetAPI.middleware,
      postAPI.middleware,
      sizeAPI.middleware,
      cartItemAPI.middleware,
      tagAPI.middleware,
      commentAPI.middleware,
      orderAPI.middleware,
      orderItemAPI.middleware
    ]),
});

export const persistor = persistStore(store);

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
