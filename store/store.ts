import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import examSlice from "./slice/examSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    exams: examSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
