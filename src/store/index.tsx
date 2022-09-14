import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./popupSlice";

const store = configureStore({
  reducer: {
    popup: popupReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
