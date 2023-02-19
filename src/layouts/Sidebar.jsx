import { Box, Button, Drawer, Toolbar } from '@mui/material';
import React from 'react';
import NavigationBtn from '../components/NavigationBtn';
import { db } from '../services/db';
import { useLiveQuery } from 'dexie-react-hooks';
import AddItem from '../components/Dialog/AddItem';

export default function Sidebar() {
	const artistList = useLiveQuery(() => db.artists?.toArray());

	const artists = artistList?.map(artist => {
		return (
			<NavigationBtn
				key={artist.artistId}
				label={artist.name}
				route={`/albums/${artist.artistId}`}
			/>
		);
	});

	return (
		<Drawer
			variant="permanent"
			sx={{
				width: 240,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-start',
				flexShrink: 0,
				[`& .MuiDrawer-paper`]: {
					bgcolor: 'primary.main',
					width: 200,
					boxSizing: 'border-box',
				},
			}}>
			<Toolbar />
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<AddItem />
				<NavigationBtn label="All Artists" route="/artists" />
			</Box>
			{/* <Box sx={{ mr: 1, display: "flex", flexDirection: "column"}}> */}
			{artistList && artistList.length > 0 ? (
				<Box sx={{ mr: 1, display: 'flex', flexDirection: 'column' }}>{artists}</Box>
			) : (
				<NavigationBtn label="No artists were found" />
			)}
		</Drawer>
	);
}
