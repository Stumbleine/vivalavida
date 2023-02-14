import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  isAuthFailed: true,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSongs: (state) => {
      state.isAuth = true;
      state.isAuthFailed = false;
    },
  },
});

export const { setAuth, setAuthFailed, setLogout } = authSlice.actions;
export default authSlice.reducer;
