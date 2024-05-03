import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./jobsSlicer";

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
  },
});

export default store;
