import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import gsap from "gsap";

export interface TransitionState {
  timeline: GSAPTimeline;
  isInitAnimation: boolean;
  componentsTimeline: GSAPTimeline;
}
const initialState: TransitionState = {
  timeline: gsap.timeline({ paused: true }),
  isInitAnimation: true,
  componentsTimeline: gsap.timeline({ paused: true }),
}
export const transitionSlice = createSlice({
  name: "transition",
  initialState: initialState,
  reducers: {
    setIsInitAnimation: (state, action: PayloadAction<boolean>) => {
      state.isInitAnimation = action.payload;
    },
  }
});

export const {setIsInitAnimation} = transitionSlice.actions;