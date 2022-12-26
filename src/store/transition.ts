import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TransitionState {
  isInitAnimation: boolean;
}
const initialState: TransitionState = {
  isInitAnimation: true,
};
export const transitionSlice = createSlice({
  name: "transition",
  initialState,
  reducers: {
    setIsInitAnimation: (state, action: PayloadAction<boolean>) => {
      state.isInitAnimation = action.payload;
    },
  },
});

export const { setIsInitAnimation } = transitionSlice.actions;
