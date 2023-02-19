import { Box, Container } from '@mui/material';
import React from 'react';

export default function Page({ config, children }) {
	const defaults = {
		mt: 10,
		mb: 10,
		ml: 25,
		mr: 0,
	};
	return (
		<Box
			sx={{
				pt: config.pt ? config.pt + 8 : 8,
				pb: config.pb ? config.pb + 15 : 15,
				pl: config.pl ? config.pl + 25 : 25,
				pr: config.pr ? config.pr + 0 : 0,
				background: config.bg,
			}}>
			<Container disableGutters maxWidth="xl" sx={{}}>
				{children}
			</Container>
		</Box>
	);
}
