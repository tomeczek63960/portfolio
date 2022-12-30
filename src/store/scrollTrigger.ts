import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IScrollTriggerState {
  isActive: boolean;
}
const initialState: IScrollTriggerState = {
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
