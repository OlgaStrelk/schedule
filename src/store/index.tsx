import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./popupSlice";
import todoReducer from "./todoSlice";
import filterReducer from "./filterSlice";

const store = configureStore({
  reducer: {
    popup: popupReducer,
    todos: todoReducer,
    filter: filterReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
