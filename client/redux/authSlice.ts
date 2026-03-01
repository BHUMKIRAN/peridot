import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AuthUser = {
  id?: string;
  name?: string;
  email?: string;
  role?: "user" | "admin" | string;
  profilePic?: string;
};

type AuthState = {
  user: AuthUser | null;
};

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<AuthUser>) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
