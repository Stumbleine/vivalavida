import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { songMock } from '../mocks/albumsMock';
import { orange } from '@mui/material/colors';
import SongSummary from '../components/Containers/SongSummary';
import PlayerActions from '../components/Containers/PlayerActions';
import ProgressBar from '../components/Containers/ProgressBar';
import VolumeController from '../components/Menu/VolumeController';
import PlayerController from '../components/Containers/PlayerController';
import Viva from '../assets/songs/Lovers-in-Japan.m4a';
import safesound from '../assets/songs/Safe-And-Sound.m4a';

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
} from '../store/PlayerSlice';
export default function Player() {
	const dispatch = useDispatch();
	const { queue, songPlaying, isPlaying, volume } = useSelector(state => state.player);
	const { songs } = useSelector(state => state.song);

	const [media, setMedia] = useState(Viva);

	useEffect(() => {
		const importMedia = async () => {
			// await import(songPlaying?.link);
			const path = './songs/A-Message.m4a';
			await import(`${path}`);
		};
		importMedia()
			.then(m => {
				console.log(m);
				setMedia(m);
			})
			.catch(e => {
				console.log(e);
			});
	}, [songPlaying]);

	// const media = React.lazy(() => import(songPlaying?.link));
	// console.log(media);
	const [play, { pause, duration, sound, stop }] = useSound(
		'./songs/A-message.m4a',
		// require('../assets/songs/A-Message.m4a'),
		// require(`${songPlaying?.link}`),
		// media,
		// songPlaying?.link,
		// import('../assets/songs/A-Message.m4a'),
		// media,A
		// media,
		// safesound,
		{
			volume,
		}
	);
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
		if (queue.length > 0 && songPlaying) {
			if (isPlaying) {
				pause();
				dispatch(setPlaying(false));
			} else {
				play();
				dispatch(setPlaying(true));
			}
		} else {
			dispatch(setQueue(songs));
			dispatch(setSongPlaying(queue[0]));
			dispatch(setPreviusTrack(queue.length[queue.length - 1]));
			dispatch(setNextTrack(queue));
			if (isPlaying) {
				pause();
				dispatch(setPlaying(false));
			} else {
				play();
				dispatch(setPlaying(true));
			}
		}
	};

	// const pl
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
					<PlayerController handlePlaying={handlePlaying} isPlaying={isPlaying} />
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
				</Box>

				{/* <PlayerActions song={song} /> */}
			</Toolbar>
		</Box>
	);
}
