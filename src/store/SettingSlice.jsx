import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setTheme: (state) => {
      let m = state.theme === "light" ? "dark" : "light";
      state.theme = m;
    },
  },
});
export const { setTheme } = settingSlice.actions;
export default settingSlice.reducer;
