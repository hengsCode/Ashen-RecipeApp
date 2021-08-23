import { configureStore } from "@reduxjs/toolkit";
import scrollReducer from "./slices/scrollSlice";
import pageReducer from "./slices/pageSlice";
import filterReducer from "./slices/filterSlice";

export default configureStore({
  reducer: {
    scroll: scrollReducer,
    page: pageReducer,
    filters: filterReducer,
  },
});
