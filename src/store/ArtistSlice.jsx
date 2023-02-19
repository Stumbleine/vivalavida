import { createSlice } from "@reduxjs/toolkit";

const artistSlice = createSlice({
  name: 'artists',
  initialState: [],
  reducers: {
    initArtists: (state, action) => {
      return action.payload;
    },
    addArtist: (state, action) => {
      return [...state, action.payload];
    }
  }
})

export const { initArtists, addArtist } = artistSlice.actions;
export default artistSlice.reducer;