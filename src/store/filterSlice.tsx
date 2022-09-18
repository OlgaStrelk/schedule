import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ALL_TODOS } from '../utils/consts';

type FilterState = {
  category: string;
};

const initialState: FilterState = {
	category: ALL_TODOS
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeCategory(state, action: PayloadAction<string>){
		state.category = action.payload
	}}
	  },
);

export const { changeCategory } = filterSlice.actions;

export default filterSlice.reducer;
