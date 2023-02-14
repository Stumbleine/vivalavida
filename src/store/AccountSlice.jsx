import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setcClearAccount: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setToken, setUser, setcClearAccount } = accountSlice.actions;
export default accountSlice.reducer;
