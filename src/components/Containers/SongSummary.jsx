import { Box, Typography } from '@mui/material';
import React from 'react';

export default function SongSummary({ song }) {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center', minWidth: 300 }}>
			<Box
				component="img"
				alt="ss"
				src={song?.coverImage}
				sx={{ width: 50, height: 'auto', borderRadius: 2 }}
			/>
			<Box sx={{ mx: 1 }}>
				<Typography noWrap>{song?.title}</Typography>
				<Typography noWrap variant="subtitle2" color="textSecondary">
					{song?.albumName}
				</Typography>
			</Box>
		</Box>
	);
}
