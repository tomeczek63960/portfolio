import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { transitionSlice } from "src/store/transition";
import { scrollTrigger } from "src/store/scrollTrigger";

const rootReducer = combineReducers({
  transition: transitionSlice.reducer,
  scrollTrigger: scrollTrigger.reducer,
});
// config the store
const store = configureStore({
  reducer: rootReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
export default store;
