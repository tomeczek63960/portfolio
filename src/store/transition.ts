import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ITransitionState {
  isInitAnimation: boolean;
}
const initialState: ITransitionState = {
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
