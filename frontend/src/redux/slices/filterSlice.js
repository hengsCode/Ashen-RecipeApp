import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filters",
  initialState: {
    filters: [],
  },
  reducers: {
    setFilters(state, action) {
      const { filters } = action.payload;
      state.filters = filters;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFilters } = filterSlice.actions;

export default filterSlice.reducer;
