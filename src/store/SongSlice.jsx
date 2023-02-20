import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	songs: null,
};

const songSlice = createSlice({
	name: 'song',
	initialState,
	reducers: {
		setSongs: (state, { payload }) => {
			state.songs = payload;
		},
	},
});

export const { setSongs } = songSlice.actions;
export default songSlice.reducer;
