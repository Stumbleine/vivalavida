import { Add } from '@mui/icons-material';
import {
	Box,
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	Icon,
	Slide,
	Tab,
	Tabs,
} from '@mui/material';
import React, { useState } from 'react';
import ArtistForm from '../Form/ArtistForm';
import SongForm from '../Form/SongForm';
import AlbumForm from '../Form/AlbumForm';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});
export default function AddItem() {
	const [open, setOpen] = useState(false);
	const [tabValue, setTabValue] = React.useState('artist');
	const handleTabChange = (event, newValue) => {
		setTabValue(newValue);
	};
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<>
			<Button color="secondary" variant="contained" onClick={handleClickOpen}>
				Add
			</Button>
			<Dialog
				PaperProps={{
					style: { borderRadius: 15, background: 'primary.main' },
					sx: { bgcolor: 'background.paper' },
				}}
				open={open}
				onClose={handleClose}
				TransitionComponent={Transition}>
				<DialogTitle>Add</DialogTitle>
				<DialogContent sx={{ background: 'none' }}>
					<Tabs
						value={tabValue}
						onChange={handleTabChange}
						textColor="secondary"
						indicatorColor="secondary"
						aria-label="secondary tabs example">
						<Tab label="Artist" value="artist"></Tab>
						<Tab label="Album" value="album" />
						<Tab label="Song" value="song" />
					</Tabs>
					<Box sx={{ pt: 3, px: 2, pb: 2 }}>
						{tabValue === 'artist' && <ArtistForm />}
						{tabValue === 'album' && <AlbumForm />}
						{tabValue === 'song' && <SongForm />}
					</Box>
				</DialogContent>
			</Dialog>
		</>
	);
}
