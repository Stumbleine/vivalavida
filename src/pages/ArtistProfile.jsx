import React, { useEffect } from 'react';
import TitlePage from '../components/TitlePage';
import { useLiveQuery } from 'dexie-react-hooks';

import Page from '../components/Page';
import { Box, Chip, Paper, Tab, Tabs, Typography } from '@mui/material';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { db } from '../services/db';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile } from '../store/ArtistSlice';
import Albums from '../components/Containers/Albums';
export default function ArtistProfile() {
	const { artistId } = useParams();
	const {
		state: { artist },
	} = useLocation();
	// console.log(state);
	const genders = ['Rock', 'Rock Alternativo', 'Pop'];
	const menbers = ['Chris Martin', 'Jonny Buckland', 'Guy Berryman'];

	const [tabValue, setTabValue] = React.useState('albums');
	const [albumSelected, setAlbumSelected] = React.useState(null);
	const [openAlbum, setOpenAlbum] = React.useState(false);

	const handleTabChange = (event, newValue) => {
		setTabValue(newValue);
	};

	const { artistProfile } = useSelector(state => state.artist);
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const albums = await db.album.toArray();
				const songs = await db.song.toArray();

				dispatch(setProfile({ artist, albums, songs }));
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);
	return (
		<Page config={{ pt: 5, pl: 5, pr: 5 }}>
			<TitlePage title="Profile" />
			<Paper elevation={0} sx={{ height: 'auto', borderRadius: 5 }}>
				<Box
					sx={{
						width: '100%',
						height: 250,
						position: 'relative',
						borderTopLeftRadius: 'inherit',
						borderTopRightRadius: 'inherit',
					}}>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							position: 'absolute',
							bottom: 20,
							left: 20,
						}}>
						<Box
							component="img"
							src={artist.image}
							sx={{ width: 150, height: 150, borderRadius: 5, objectFit: 'cover' }}
						/>
						<Box sx={{ ml: 2 }}>
							<Typography>{artist?.name}</Typography>
							<Box sx={{ mt: 1 }}>
								{genders?.map((gender, index) => (
									<Chip
										sx={{ mx: 0.5 }}
										key={index}
										label={gender}
										size="small"
										variant="filled"
									/>
								))}
							</Box>
							<Box sx={{ mt: 1 }}>
								{menbers?.map((member, index) => (
									<Typography
										variant="body2"
										sx={{ mr: 0.5, display: 'inline-block' }}
										key={index}
										size="small">
										{member}
									</Typography>
								))}
							</Box>
							<Typography
								variant="caption"
								component="a"
								href={'https://www.coldplay.com/homepage/'}>
								https://www.coldplay.com
							</Typography>
						</Box>
					</Box>
				</Box>
				<Box>
					<Tabs
						value={tabValue}
						onChange={handleTabChange}
						textColor="secondary"
						indicatorColor="secondary"
						aria-label="secondary tabs example">
						<Tab label="Albums" value="albums">
							<Typography>asss</Typography>
						</Tab>
						<Tab label="All songs" value="songs" />
					</Tabs>
					<Box sx={{ padding: 2 }}>
						{tabValue === 'albums' && (
							<>{openAlbum ? <Box></Box> : <Albums albums={artistProfile?.albums} />}</>
						)}
						{tabValue === 'songs' && (
							<Box>
								<Typography>The second tab</Typography>
							</Box>
						)}
					</Box>
				</Box>
			</Paper>
		</Page>
	);
}
