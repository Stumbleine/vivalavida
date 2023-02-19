import { createSlice } from "@reduxjs/toolkit";

const albumSlice = createSlice({
  name: 'albums',
  initialState: [],
  reducers: {
    initAlbums: (state, action) => {
      return action.payload;
    },
    addAlbum: (state, action) => {
      return [...state, action.payload];
    }
  }
})

export const { initAlbums, addAlbum } = albumSlice.actions;
export default albumSlice.reducer;