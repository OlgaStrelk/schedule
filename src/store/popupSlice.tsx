import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPopup {
  isFilterOpen: boolean;
}

const initialState: IPopup = {
  isFilterOpen: false,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {

    openFilterPopup: (state, action: PayloadAction<undefined>) => {
      state.isFilterOpen = true;
    },

    closeFilterPopup: (state, action) => {
      state.isFilterOpen = false;
    },
  },
});

export const {
  openFilterPopup,
  closeFilterPopup,
} = popupSlice.actions;

export default popupSlice.reducer;
