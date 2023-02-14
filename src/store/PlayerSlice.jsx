import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  play: false,
  playingSong: {},
  pause: false,
  songPaused: {},
  nextSong: {},
  previusSong: {},
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPreviusSong: (state, { payload }) => {
      state.token = payload;
    },
    setPlaying: (state, payload) => {
      state.play = true;
      state.playingSong = payload;
    },
  },
});

export const { setPreviusSong, setPlaying } = playerSlice.actions;
export default playerSlice.reducer;
