import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    currPage: "home",
  },
  reducers: {
    setPage(state, action) {
      const { currPage } = action.payload;
      state.currPage = currPage;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPage } = pageSlice.actions;

export default pageSlice.reducer;
