import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IError {
  error: string;
  id: number;
}
export interface IErrorsState {
  errors: IError[];
}
const initialState: IErrorsState = {
  errors: [],
};
export const errors = createSlice({
  name: "errors",
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<IError>) => {
      state.errors = [...state.errors, action.payload];
    },
    removeError: (state, action: PayloadAction<{ id: number }>) => {
      state.errors = state.errors.filter((err) => err.id !== action.payload.id);
    },
  },
});

export const { setError, removeError } = errors.actions;
