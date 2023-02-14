import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  isAuthFailed: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state) => {
      state.isAuth = true;
      state.isAuthFailed = false;
    },
    setAuthFailed: (state) => {
      state.isAuth = false;
      state.isAuthFailed = true;
    },
    setLogout: (state) => {
      state.isAuth = false;
    },
  },
});

export const { setAuth, setAuthFailed, setLogout } = authSlice.actions;
export default authSlice.reducer;
