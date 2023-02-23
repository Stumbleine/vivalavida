import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { songMock } from '../mocks/albumsMock';
import { orange } from '@mui/material/colors';
import SongSummary from '../components/Containers/SongSummary';
import ProgressBar from '../components/Containers/ProgressBar';
import VolumeController from '../components/Menu/VolumeController';
import PlayerController from '../components/Containers/PlayerController';

import useSound from 'use-sound';
import { useDispatch, useSelector } from 'react-redux';
import {
	setCurrentTime,
	setPlaying,
	setSeconds,
	setTotalTime,
	setSongPlaying,
	setQueue,
	setPreviusTrack,
	setNextTrack,
	setIndex,
} from '../store/PlayerSlice';
import QueueDialog from '../components/Dialog/QueueDialog';
import { shuffleArray, shuffleES6 } from '../Utils/Shuffle';
export default function Player() {
	const dispatch = useDispatch();
	const { queue, songPlaying, isPlaying, volume, indexTrack } = useSelector(
		state => state.player
	);
	const { songs } = useSelector(state => state.song);

	const [play, { pause, duration, sound, stop }] = useSound(songPlaying?.link, {
		volume,
	});
	const [totalTime, setTotalTime] = useState({ min: '0', sec: '0' });
	const [currentTime, setCurrentTime] = useState({ min: '0', sec: '0' });
	const [seconds, setSeconds] = useState(0);
	// useEffect(() => {}, []);
	useEffect(() => {
		const sec = duration / 1000;
		const min = Math.floor(sec / 60);
		const secRemain = Math.floor(sec % 60);
		setTotalTime({
			min,
			sec: secRemain,
		});
	}, [duration]);

	useEffect(() => {
		const interval = setInterval(() => {
			if (sound) {
				setSeconds(sound.seek([]));
				const min = Math.floor(sound.seek([]) / 60);
				const sec = Math.floor(sound.seek([]) % 60);
				setCurrentTime({
					min,
					sec,
				});
			}
		}, 1000);
		return () => clearInterval(interval);
	}, [sound]);

	const handlePlaying = () => {
		if (songPlaying) {
			if (isPlaying) {
				pause();
				dispatch(setPlaying(false));
			} else {
				play();
				dispatch(setPlaying(true));
			}
		} else {
			dispatch(setSongPlaying(0));
			if (isPlaying) {
				pause();
				dispatch(setPlaying(false));
			} else {
				play();
				dispatch(setPlaying(true));
			}
		}
	};

	const handleNext = () => {
		pause();
		dispatch(setNextTrack());
		dispatch(setPlaying(true))
		// dispatch(setSongPlaying(0))
		play();
	};

	const handlePrevius = () => {
		pause()
		dispatch(setPreviusTrack());

		play()
	};

	const handleChangeShuffle = () => {
		const shuffle = async () => {
			try {
				const queueShufled = await shuffleES6(queue);
				dispatch(setQueue(queueShufled));
				dispatch(setSongPlaying(0))
				play()

			} catch (e) {
				throw new Error(e);
			}
		};
		shuffle();
	};

	return (
		<Box
			sx={{
				zIndex: theme => theme.zIndex.drawer + 1,
				position: 'fixed',
				background: orange[100],
				bottom: 0,
				left: 0,
				width: '100%',
				height: 'auto',
			}}>
			<Toolbar
				sx={{
					bgcolor: 'primary.main',
					height: 90,
				}}>
				<SongSummary song={songPlaying} />

				<Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
					{/* play */}
					<PlayerController
						handlePlaying={handlePlaying}
						isPlaying={isPlaying}
						handleChangeShuffle={handleChangeShuffle}
						handleNext={handleNext}
						handlePrevius={handlePrevius}
					/>
					{/* progress */}
					<ProgressBar
						sound={sound}
						duration={duration}
						currentTime={currentTime}
						seconds={seconds}
						totalTime={totalTime}
					/>
					{/* volume */}
					<VolumeController />
					<QueueDialog />
				</Box>

				{/* <PlayerActions song={song} /> */}
			</Toolbar>
		</Box>
	);
}
