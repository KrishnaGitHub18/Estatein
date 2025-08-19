import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import propertiesReducer from "./features/propertiesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    properties: propertiesReducer
  },
});
