import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./popupSlice";
import todoReducer from "./todoSlice"

const store = configureStore({
  reducer: {
    popup: popupReducer,
	todos: todoReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
