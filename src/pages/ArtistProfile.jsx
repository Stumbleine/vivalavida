import React, { useEffect } from 'react';
import TitlePage from '../components/TitlePage';
import { useLiveQuery } from 'dexie-react-hooks';

import Page from '../components/Page';
import {
	Box,
	Chip,
	Fab,
	Paper,
	Stack,
	SvgIcon,
	Tab,
	Tabs,
	Typography,
} from '@mui/material';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { db } from '../services/db';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile } from '../store/ArtistSlice';
import Albums from '../components/Containers/Albums';
import SongsTable from '../components/Table/SongsTable';
import { ReactComponent as Play } from '../assets/icons/play.svg';

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
	// const { artistProfile } = useSelector(state => state.artist);

	const dispatch = useDispatch();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const albums = await db.album.toArray();
				const songs = await db.song.toArray();
				// db.song(idArtist)
				// Modificada = songs.foreach(song=>(
				// 	  {...song, imageCover:album.imageCover,artistName:artist.name}
				// 	 )

				// 	)
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
					<Stack
						direction="row"
						sx={{
							display: 'flex',
							width: '85%',
							// alignItems: 'center',
							position: 'absolute',
							bottom: 20,
							left: 20,
						}}>
						<Box
							component="img"
							src={artist.image}
							sx={{ width: 150, height: 150, borderRadius: 5, objectFit: 'cover' }}
						/>
						<Box sx={{ ml: 2, flexGrow: 1 }}>
							<Typography>{artist?.name}</Typography>
							<Box sx={{ mt: 1 }}>
								{genders?.map((gender, index) => (
									<Chip
										sx={{ mr: 0.5 }}
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
										// variant="body2"
										sx={{ mr: 0.5, display: 'inline' }}
										key={index}
										size="small">
										{member}
										{index !== menbers.length - 1 && ', '}
									</Typography>
								))}
							</Box>
							<Typography
								variant="body2"
								component="a"
								sx={{ textDecoration: 'none', color: 'text.secondary' }}
								href={'https://www.coldplay.com/homepage/'}>
								ir al sitio web
							</Typography>
						</Box>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'flex-end',
								justifyContent: 'flex-end',
							}}>
							<Fab color="primary">
								<SvgIcon
									sx={{
										color: 'text.icon',
										'&:hover': {
											color: 'terciary.main',
										},
									}}>
									<Play />
								</SvgIcon>
							</Fab>
						</Box>
					</Stack>
				</Box>
				<Box>
					<Tabs
						value={tabValue}
						onChange={handleTabChange}
						textColor="secondary"
						indicatorColor="secondary"
						aria-label="secondary tabs example">
						<Tab label="Albums" value="albums"></Tab>
						<Tab label="All songs" value="songs" />
					</Tabs>
					<Box sx={{ padding: 2 }}>
						{tabValue === 'albums' && <Albums albums={artistProfile?.albums} />}
						{tabValue === 'songs' && <SongsTable songs={artistProfile?.songs} />}
					</Box>
				</Box>
			</Paper>
		</Page>
	);
}