import { React, useEffect } from 'react';
import Page from '../components/Page';
import TitlePage from '../components/TitlePage';
import { useLocation, useParams } from 'react-router-dom';
import { Box, Chip, Fab, Paper, SvgIcon, Typography } from '@mui/material';
import SongsTable from '../components/Table/SongsTable';
import { setSongs } from '../store/SongSlice';
import { useSelector, useDispatch } from 'react-redux';
import { db } from '../services/db';
import { ReactComponent as Play } from '../assets/icons/play.svg';
import { setQueue, setSongPlaying } from '../store/PlayerSlice';

export default function Album() {
	const { id } = useParams();

	const { songs } = useSelector(state => state.song);

	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const songs = await db.song.toArray();
				dispatch(setSongs(songs));
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	const songsForAlbum = songs?.filter(song => {
		return song.albumId === parseInt(id);
	});

	const playAlbum=()=>{
		dispatch(setQueue(songsForAlbum))
		dispatch(setSongPlaying(0))
	}
	const {
		state: { album },
	} = useLocation();
	return (
		<Page config={{ pt: 5, pl: 5, pr: 5 }}>
			{/* <TitlePage title={albu} /> */}
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
								width:'90%'

						}}>
						<Box
							component="img"
							src={album?.coverImage}
							sx={{ width: 150, height: 150, borderRadius: 5, objectFit: 'cover' }}
						/>
						<Box sx={{ ml: 2,flexGrow:1}}>
							<Typography>{album?.title}</Typography>
							<Typography>Launch year: {album?.launchYear}</Typography>

							<Box sx={{ mt: 1 }}>
								{/* {album.gender?.map((gender, index) => ( */}
								<Chip label={album?.gender} size="small" variant="filled" />
								{/* ))} */}
							</Box>
						</Box>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'flex-end',
								justifyContent: 'flex-end',
								// width:'100%'
							}}>
							<Fab color="primary" onClick={()=>{playAlbum()}}>
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
					</Box>
				</Box>
				<Box sx={{ padding: 2 }}>
					<SongsTable songs={songsForAlbum} />
				</Box>
			</Paper>
		</Page>
	);
}
