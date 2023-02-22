import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	albums: null,
	albumProfile: null,
};

const authSlice = createSlice({
	name: 'album',
	initialState,
	reducers: {
		setAlbums: (state, { payload }) => {
			state.albums = payload;
		},
		setProfile: (state, { payload }) => {
			state.albumProfile = payload;
		},
	},
});

export const { setAlbums, setProfile } = authSlice.actions;
export default authSlice.reducer;