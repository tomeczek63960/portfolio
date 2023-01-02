import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { transitionSlice } from "src/store/transition";
import { scrollTrigger } from "src/store/scrollTrigger";
import { errors } from "src/store/errors";

const rootReducer = combineReducers({
  transition: transitionSlice.reducer,
  scrollTrigger: scrollTrigger.reducer,
  errors: errors.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
export default store;
