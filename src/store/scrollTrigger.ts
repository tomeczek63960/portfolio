import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ScrollTriggerState {
  isActive: boolean;
}
const initialState: ScrollTriggerState = {
  isActive: false,
};
export const scrollTrigger = createSlice({
  name: "scrollTrigger",
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<boolean>) => {
      state.isActive = action.payload;
    },
  },
});

export const { setActive } = scrollTrigger.actions;
