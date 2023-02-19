import { Box, Typography } from '@mui/material';
import React from 'react';

export default function TitlePage({ title }) {
	return (
		<Box sx={{ width: '100%', mb: 2 }}>
			<Typography variant="h5" sx={{}}>
				{title}
			</Typography>
		</Box>
	);
}
