import { createSlice } from "@reduxjs/toolkit";

export const scrollSlice = createSlice({
  name: "scroll",
  initialState: {
    scrollY: window.scrollY,
  },
  reducers: {
    setScrollY(state, action) {
      const { scrollY } = action.payload;
      state.scrollY = scrollY;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setScrollY } = scrollSlice.actions;

export default scrollSlice.reducer;
