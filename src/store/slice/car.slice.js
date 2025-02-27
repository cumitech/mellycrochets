import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredCars: [],
};

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setFilteredCars: (state, action) => {
      state.filteredCars = action.payload;
    },
    resetFilters: (state, action) => {
      state.filteredCars = [];
    },
  },
});

export const { setFilteredCars, resetFilters } = carSlice.actions;
const reducer = carSlice.reducer;
export { reducer as carReducer };
