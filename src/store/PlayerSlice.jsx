import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	volume: 1,
	isPlaying: false,
	songPlaying: null,
	nextTrack: null,
	previusTrack: null,
	// pause: false,
	// trackPaused: {},
	queue: [],
	totalTime: { min: '0', sec: '0' },
	currentTime: { min: '0', sec: '0' },
	seconds: 0,
};

const playerSlice = createSlice({
	name: 'player',
	initialState,
	reducers: {
		setPreviusTrack: (state, { payload }) => {
			state.previusTrack = payload;
		},
		setNextTrack: (state, { payload }) => {
			state.nextTrack = payload;
		},
		setSongPlaying: (state, { payload }) => {
			state.songPlaying = payload;
		},
		setPlaying: (state, { payload }) => {
			state.isPlaying = payload;
		},

		setVolume: (state, { payload }) => {
			state.volume = payload;
		},
		setQueue: (state, { payload }) => {
			state.queue = payload;
		},
		setCurrentTime: (state, { payload }) => {
			state.currentTime = payload;
		},
		setTotalTime: (state, { payload }) => {
			state.totalTime = payload;
		},
		setSeconds: (state, { payload }) => {
			state.seconds = payload;
		},
	},
});

export const {
	setPreviusTrack,
	setPlaying,
	setQueue,
	setVolume,
	setCurrentTime,
	setSeconds,
	setTotalTime,
	setNextTrack,
	setSongPlaying,
} = playerSlice.actions;
export default playerSlice.reducer;
