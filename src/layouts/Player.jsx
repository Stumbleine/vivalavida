import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React, { useRef } from 'react';
import { songMock } from '../mocks/albumsMock';
import { orange } from '@mui/material/colors';
import SongSummary from '../components/Containers/SongSummary';
import PlayerActions from '../components/Containers/PlayerActions';
export default function Player() {
	const song = songMock;

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
				<SongSummary song={song} />
				<PlayerActions song={song} />
			</Toolbar>
		</Box>
	);
}
