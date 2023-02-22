import { Box, Button, Drawer, Toolbar } from '@mui/material';
import React, { useEffect } from 'react';
import NavigationBtn from '../components/NavigationBtn';
import { db } from '../services/db';
import { useLiveQuery } from 'dexie-react-hooks';
import AddItem from '../components/Dialog/AddItem';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
	const navigate = useNavigate();
	const artistList = useLiveQuery(() => db.artist.toArray()
	);

	const artists = artistList?.map(artist => {
		return (
			<Button
				sx={{ color: 'white' }}
				onClick={() =>
					navigate(`/artist-profile/${artist.artistId}`, { state: { artist: artist } })
				}
			>
				{artist.name}
			</Button>



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
				<NavigationBtn label="All Artist" route="/artists" />
			</Box>
			{artists && artists.length > 0 ? (
				<Box sx={{ mr: 1, display: 'flex', flexDirection: 'column' }}>
					{artists}
				</Box>
			) : (
				<NavigationBtn label="No artists were found" />
			)}
		</Drawer>
	);
}
