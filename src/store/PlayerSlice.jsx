import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	volume: 1,
	isPlaying: false,
	songPlaying: null,
	indexNextTrack: 0,
	indexPreviusTrack: 0,
	indexPlayingTrack: 0,
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
		setSongPlaying: (state, { payload }) => {
			state.songPlaying = state.queue[payload];
			state.indexPlayingTrack = payload;

			if (payload === 0) {
				state.indexPreviusTrack = state.queue.length - 1;
			} else {
				if (payload === state.queue.length - 1) {
					state.indexPreviusTrack = 0;
				} else {
					state.indexPreviusTrack = state.indexPlayingTrack - 1;
				}
			}
			if (payload >= 0 && payload < state.queue.length) {
				state.indexNextTrack = state.indexPlayingTrack + 1;
			} else {
				if (payload === state.queue.length - 1) {
					state.indexNextTrack = 0;
				}
			}
		},
		setPreviusTrack: (state, { payload }) => {
			state.songPlaying = state.queue[state.indexPreviusTrack];
			state.indexPlayingTrack = state.indexPreviusTrack;
			if (state.indexPlayingTrack === 0) {
				state.indexPreviusTrack = state.queue.length - 1;
			} else {
				if (state.indexPlayingTrack === state.queue.length - 1) {
					state.indexPreviusTrack = 0;
				} else {
					state.indexPreviusTrack = state.indexPreviusTrack - 1;
				}
			}
			if (state.indexPlayingTrack === 0) {
				state.indexNextTrack = state.queue.length - 1;
			} else {
				if (state.indexPlayingTrack === state.queue.length - 1) {
					state.indexNextTrack = 0;
				} else {
					state.indexNextTrack = state.indexNextTrack - 1;
				}
			}
		},
		setNextTrack: (state, { payload }) => {
			state.songPlaying = state.queue[state.indexNextTrack];
			state.indexPlayingTrack = state.indexNextTrack;
			if (state.indexPlayingTrack === 0) {
				state.indexPreviusTrack = state.queue.length - 1;
			} else {
				if (state.indexPlayingTrack === state.queue.length - 1) {
					state.indexPreviusTrack = 0;
				} else {
					state.indexPreviusTrack = state.indexPreviusTrack - 1;
				}
			}
			if (state.indexPlayingTrack === 0) {
				state.indexNextTrack = state.queue.length - 1;
			} else {
				if (state.indexPlayingTrack === state.queue.length - 1) {
					state.indexNextTrack = 0;
				} else {
					state.indexNextTrack = state.indexNextTrack - 1;
				}
			}
			// console.log(st)
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
		setIndex: (state, { payload }) => {
			state.indexTrack = payload;
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
	setIndex,
} = playerSlice.actions;
export default playerSlice.reducer;
