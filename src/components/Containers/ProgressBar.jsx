import { useTheme } from '@emotion/react';
import { Box, Slider, Typography } from '@mui/material';
import React from 'react';

export default function ProgressBar({
	sound,
	totalTime,
	duration,
	currentTime,
	seconds,
}) {
	const theme = useTheme();

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				px: 2,
				// width: '100%',
				// background: 'red',
				flexGrow: 1,
			}}>
			<Typography color="textSecondary" sx={{ width: 40, textAlign: 'center' }}>
				{currentTime.min < 10 ? '0' + currentTime.min : currentTime.min}:
				{currentTime.sec < 10 ? '0' + currentTime.sec : currentTime.sec}
			</Typography>
			<Slider
				aria-label="time-indicator"
				defaultValue={0}
				size="small"
				min={0}
				// step={1}
				max={duration / 1000}
				value={seconds}
				onChange={e => {
					sound.seek([e.target.value]);
				}}
				sx={{
					mx: 2,
					// width: 300,
					// bgcolor: 'secondary.main',
					color: 'secondary.main',
					height: 5,
					'& .MuiSlider-thumb': {
						width: 10,
						height: 10,
						transition: '0.2s cubic-bezier(.47,1.64,.41,.8)',
						'&:before': {
							// boxShadow: '0 2px 12px 0 rgba(255,255,255,0.4)',
							boxShadow: `0 2px 12px 0 ${
								theme.palette.mode === 'dark'
									? theme.palette.secondary.main
									: theme.palette.primary.main
							}`,
						},
						'&:hover, &.Mui-focusVisible': {
							boxShadow: `0px 0px 0px 8px ${
								theme.palette.mode === 'dark'
									? 'rgb(255 255 255/ 16%)'
									: 'rgb(0 0 0 / 16%)'
							}`,
						},
						'&.Mui-active': {
							width: 20,
							height: 20,
						},
					},
					'& .MuiSlider-rail': {
						opacity: 0.28,
					},
				}}
			/>
			<Typography color="textSecondary">
				{totalTime.min < 10 ? '0' + totalTime.min : totalTime.min}:
				{totalTime.sec < 10 ? '0' + totalTime.sec : totalTime.sec}
			</Typography>
		</Box>
	);
}
