"use client";

import { persistor, store } from "../../store/store";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const ClientProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ClientProvider;
