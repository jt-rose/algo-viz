// preferred_lang
// show_lines
// theme

import { configureStore } from "@reduxjs/toolkit";
import PrismSettingsReducer from "./prismSettingsSlice";

export const store = configureStore({
  reducer: {
    prismSettings: PrismSettingsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
