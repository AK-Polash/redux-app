import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/countSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Note: eikhane "counterReducer" "initialState" ke represent kore.