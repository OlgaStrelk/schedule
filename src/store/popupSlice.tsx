import { createSlice } from "@reduxjs/toolkit";

interface IPopup {
  isFilterOpen: boolean;
  isFormOpen: boolean;
}

const initialState: IPopup = {
  isFilterOpen: false,
  isFormOpen: false,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    openFilterPopup: (state) => {
      state.isFilterOpen = true;
    },

    closeFilterPopup: (state) => {
      state.isFilterOpen = false;
    },

    openFormPopup: (state) => {
      state.isFormOpen = true;
    },

    closeFormPopup: (state) => {
      state.isFormOpen = false;
    },
  },
});

export const { openFilterPopup, closeFilterPopup, openFormPopup, closeFormPopup } = popupSlice.actions;

export default popupSlice.reducer;
