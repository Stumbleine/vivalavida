import { Box, Divider, Drawer, MenuItem, Toolbar } from '@mui/material';
import NavigationBtn from '../components/NavigationBtn';
import { db } from '../services/db';
import { useLiveQuery } from 'dexie-react-hooks';
import AddItem from '../components/Dialog/AddItem';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
	const navigate = useNavigate();
	const artistList = useLiveQuery(() => db.artist.toArray());

	const artists = artistList?.map(artist => {
		return (
			<MenuItem
				key={artist.artistId}
				sx={{
					my: 0.5,
				}}
				onClick={() =>
					navigate(`/artist-profile/${artist.artistId}`, { state: { artist } })
				}>
				{artist.name}
			</MenuItem>
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
			<Box sx={{ display: 'flex', flexDirection: 'column', px: 2, py: 2 }}>
				<AddItem />
			</Box>
			<Divider draggable />
			{artists && artists.length > 0 ? (
				<Box sx={{ mr: 1, display: 'flex', flexDirection: 'column', px: 2, py: 1 }}>
					{artists}
				</Box>
			) : (
				<NavigationBtn label="No artists were found" />
			)}
		</Drawer>
	);
}
