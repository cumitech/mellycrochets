// import { CURRENCY } from "../../constants/constant";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currency: "", // Default currency
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
  },
});

export const { setCurrency } = currencySlice.actions;
const reducer = currencySlice.reducer;
export { reducer as currencyReducer };