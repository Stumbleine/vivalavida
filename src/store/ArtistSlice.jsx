import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	artists: null,
	artistProfile: null,
};

const authSlice = createSlice({
	name: 'artist',
	initialState,
	reducers: {
		setArtists: (state, { payload }) => {
			state.artists = payload;
		},
		setProfile: (state, { payload }) => {
			state.artistProfile = payload;
		},
	},
});

export const { setArtists, setProfile } = authSlice.actions;
export default authSlice.reducer;
