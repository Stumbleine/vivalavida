import { Box, IconButton, Menu, Slider, SvgIcon, Typography } from '@mui/material';
import React, { useState } from 'react';
import { ReactComponent as VolumeHigh } from '../../assets/icons/volume-high.svg';
import { ReactComponent as VolumeLow } from '../../assets/icons/volume-low.svg';
import { ReactComponent as VolumeOff } from '../../assets/icons/volume-off.svg';
import { useTheme } from '@emotion/react';
export default function VolumeController({ handleVolume, volume }) {
	const theme = useTheme();
	const [anchorElUser, setAnchorElUser] = useState(null);
	const handleOpenVolumeMenu = event => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseVolumeMenu = () => {
		setAnchorElUser(null);
	};
	return (
		<Box sx={{ position: 'relative' }}>
			<IconButton onClick={handleOpenVolumeMenu}>
				<SvgIcon
					sx={{
						color: 'text.icon',
						'&:hover': {
							color: 'primary.main',
						},
					}}>
					<VolumeHigh></VolumeHigh>
				</SvgIcon>
			</IconButton>
			<Menu
				sx={{
					mt: '-90px',
					// minWidth: 250,
					// borderRadius: 10,
					// background: 'pink',
				}}
				PaperProps={{
					style: {
						borderRadius: 15,
						background: theme.palette.secondary.main,
						// transform: 'rotateX(90deg,0)',
					},
				}}
				id="menu-appbar"
				anchorEl={anchorElUser}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={Boolean(anchorElUser)}
				onClose={handleCloseVolumeMenu}>
				<Box
					sx={{
						height: 'auto',
						width: 'auto',
						// transform: 'rotate(-90deg,0)',
						display: 'flex',
						alignItems: 'center',
						px: 2,
						// px: 2,
					}}>
					<Slider
						aria-label="time-indicator"
						// defaultValue={0}
						size="small"
						min={0}
						step={0.01}
						max={1}
						value={volume}
						onChange={e => handleVolume(e.target.value)}
						sx={{
							width: 250,
							height: 5,
							'& .MuiSlider-thumb': {
								width: 10,
								height: 10,
								transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
								'&:before': {
									boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
								},
								'&:hover, &.Mui-focusVisible': {
									boxShadow: `0px 0px 0px 8px ${
										theme.palette.mode === 'dark'
											? 'rgb(255 255 255 / 16%)'
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
					<Typography sx={{ ml: 1, width: 30, textAlign: 'center' }}>
						{volume * 100}%
					</Typography>
				</Box>
			</Menu>
		</Box>
	);
}
