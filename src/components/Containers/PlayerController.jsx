import { Box, IconButton, SvgIcon } from '@mui/material';
import React from 'react';
import { ReactComponent as Play } from '../../assets/icons/play.svg';
import { ReactComponent as Pause } from '../../assets/icons/pause.svg';
import { ReactComponent as Previus } from '../../assets/icons/backward.svg';
import { ReactComponent as Next } from '../../assets/icons/forward.svg';
import { ReactComponent as Repeat } from '../../assets/icons/repeat.svg';
import { ReactComponent as VolumeHigh } from '../../assets/icons/volume-high.svg';
import { ReactComponent as VolumeLow } from '../../assets/icons/volume-low.svg';
import { ReactComponent as VolumeOff } from '../../assets/icons/volume-off.svg';
import { ReactComponent as Shuffle } from '../../assets/icons/shuffle.svg';
export default function PlayerController({
	handlePlaying,
	isPlaying,
	handleChangeShuffle,
	handleNext,
	handlePrevius,
}) {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center' }}>
			
			<IconButton onClick={() => handlePrevius()}>
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
			<IconButton onClick={() => handleNext()}>
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
	
		</Box>
	);
}
