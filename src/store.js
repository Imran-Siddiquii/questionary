import { configureStore } from "@reduxjs/toolkit";
import UserPostSlice from "./UserPostSlice";
export const store = configureStore({
  reducer: {
    posts: UserPostSlice,
  },
});
