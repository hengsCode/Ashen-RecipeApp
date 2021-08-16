import { configureStore } from "@reduxjs/toolkit";
import scrollReducer from "./slices/scrollSlice";
import pageReducer from "./slices/pageSlice";

export default configureStore({
  reducer: {
    scroll: scrollReducer,
    page: pageReducer,
  },
});
