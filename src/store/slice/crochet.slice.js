import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredCrochets: [],
};

const crochetSlice = createSlice({
  name: "crochets",
  initialState,
  reducers: {
    setFilteredCrochets: (state, action) => {
      state.filteredCrochets = action.payload;
    },
    resetFilters: (state, action) => {
      state.filteredCrochets = [];
    },
  },
});

export const { setFilteredCrochets, resetFilters } = crochetSlice.actions;
const reducer = crochetSlice.reducer;
export { reducer as crochetReducer };
