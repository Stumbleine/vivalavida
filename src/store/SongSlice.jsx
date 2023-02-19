import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: 'songs',
  initialState: [],
  reducers: {
    initSongs: (state, action) => {
      return action.payload;
    },
    addSong: (state, action) => {
      return [...state, action.payload];
    }
  }
})

export const { initSongs, addSong } = songSlice.actions;
export default songSlice.reducer;