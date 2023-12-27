import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "@/types/interfaces";

const initialState: UserState = {
  isAuthenticated: false,
  email: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.email = action.payload;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = false;
      state.email = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.email = null;
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = userSlice.actions;
export const selectAuthState = (state: { auth: UserState }) => state.auth;
export default userSlice.reducer;
