import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    openFilterPopup: (state, action: PayloadAction<undefined>) => {
      state.isFilterOpen = true;
    },

    closeFilterPopup: (state, action) => {
      state.isFilterOpen = false;
    },

    openFormPopup: (state, action: PayloadAction<undefined>) => {
      state.isFormOpen = true;
    },

    closeFormPopup: (state, action: PayloadAction<undefined>) => {
      state.isFormOpen = false;
    },
  },
});

export const { openFilterPopup, closeFilterPopup, openFormPopup, closeFormPopup } = popupSlice.actions;

export default popupSlice.reducer;
