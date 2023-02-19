import { Box, Typography } from '@mui/material';
import React from 'react';

export default function SongSummary({ song }) {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center' }}>
			<Box
				component="img"
				alt="ss"
				src={song?.album?.coverImage}
				sx={{ width: 50, height: 'auto', borderRadius: 2 }}
			/>
			<Box sx={{ mx: 1 }}>
				<Typography>{song?.title}</Typography>
				<Typography variant="subtitle2" color="textSecondary">
					{song?.album?.name}
				</Typography>
			</Box>
		</Box>
	);
}
