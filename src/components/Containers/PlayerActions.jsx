import {
	Box,
	Button,
	IconButton,
	LinearProgress,
	Slider,
	Stack,
	SvgIcon,
	TextField,
	Typography,
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import useSound from 'use-sound';
import { useTheme } from '@emotion/react';
import VolumeController from '../Menu/VolumeController';
import ProgressBar from './ProgressBar';
import Viva from '../../assets/songs/Lovers-in-Japan.m4a';
import { useSelector } from 'react-redux';
import { setVolume } from '../../store/PlayerSlice';

export default function PlayerActions({ song }) {
	const { volume, queue } = useSelector(state => state.player);
	const [play, { pause, duration, sound, stop }] = useSound(Viva, { volume });
	const [isPlaying, setPlaying] = useState(false);
	const [totalTime, setTotalTime] = useState({ min: '0', sec: '0' });
	const [currentTime, setCurrentTime] = useState({ min: '0', sec: '0' });
	const [seconds, setSeconds] = useState(0);

	const handleVolume = vol => {
		setVolume(vol);
	};
	useEffect(() => {
		const sec = duration / 1000;
		const min = Math.floor(sec / 60);
		const secRemain = Math.floor(sec % 60);
		setTotalTime({
			min: min,
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
		if (isPlaying) {
			pause();
			setPlaying(false);
		} else {
			play();
			setPlaying(true);
		}
	};

	return (
		<Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
			{/* play */}

			{/* progress */}
			<ProgressBar
				sound={sound}
				duration={duration}
				currentTime={currentTime}
				seconds={seconds}
				totalTime={totalTime}
			/>
			{/* volume */}
			<VolumeController handleVolume={handleVolume} volume={volume} />
		</Box>
	);
}
