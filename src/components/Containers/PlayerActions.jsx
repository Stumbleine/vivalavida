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
import { ReactComponent as Play } from '../../assets/icons/play.svg';
import { ReactComponent as Pause } from '../../assets/icons/pause.svg';
import { ReactComponent as Previus } from '../../assets/icons/backward.svg';
import { ReactComponent as Next } from '../../assets/icons/forward.svg';
import { ReactComponent as Repeat } from '../../assets/icons/repeat.svg';
import { ReactComponent as VolumeHigh } from '../../assets/icons/volume-high.svg';
import { ReactComponent as VolumeLow } from '../../assets/icons/volume-low.svg';
import { ReactComponent as VolumeOff } from '../../assets/icons/volume-off.svg';
import { ReactComponent as Shuffle } from '../../assets/icons/shuffle.svg';
import useSound from 'use-sound';
import { useTheme } from '@emotion/react';
import VolumeController from '../Menu/VolumeController';
import ProgressBar from './ProgressBar';
import Viva from '../../assets/songs/Lovers-in-Japan.m4a';

export default function PlayerActions({ song }) {
	const theme = useTheme();

	const [volume, setVolume] = useState(1);
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
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				<IconButton component="button">
					<SvgIcon
						sx={{
							color: 'text.icon',
							'&:hover': {
								color: 'terciary.main',
							},
						}}>
						<Repeat />
					</SvgIcon>
				</IconButton>
				<IconButton onClick={() => console.log('ass')}>
					<SvgIcon
						sx={{
							color: 'text.icon',
							'&:hover': {
								color: 'terciary.main',
							},
						}}>
						<Previus />
					</SvgIcon>
				</IconButton>
				{!isPlaying ? (
					<IconButton
						onClick={() => {
							handlePlaying();
						}}>
						<SvgIcon
							sx={{
								color: 'text.icon',
								'&:hover': {
									color: 'terciary.main',
								},
							}}>
							<Play />
						</SvgIcon>
					</IconButton>
				) : (
					<IconButton
						onClick={() => {
							handlePlaying();
						}}>
						<SvgIcon
							sx={{
								color: 'text.icon',
								'&:hover': {
									color: 'terciary.main',
								},
							}}>
							<Pause />
						</SvgIcon>
					</IconButton>
				)}
				<IconButton onClick={() => console.log('ass')}>
					<SvgIcon
						sx={{
							color: 'text.icon',
							'&:hover': {
								color: 'terciary.main',
							},
						}}>
						<Next />
					</SvgIcon>
				</IconButton>
				<IconButton onClick={() => console.log('ass')}>
					<SvgIcon
						sx={{
							color: 'text.icon',
							'&:hover': {
								color: 'terciary.main',
							},
						}}>
						<Shuffle />
					</SvgIcon>
				</IconButton>
			</Box>
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
