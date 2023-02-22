import React, { useEffect } from 'react';
import Page from '../components/Page';
import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import TitlePage from '../components/TitlePage';
import SongsList from '../components/List/SongsList';
import SongsTable from '../components/Table/SongsTable';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../services/db';
import { setSongs } from '../store/SongSlice';
import { setQueue, setSongPlaying } from '../store/PlayerSlice';

export default function MyMusic() {
	console.log(window.location.origin + '/public/songs/A-Message.m4a');
	const { songs } = useSelector(state => state.song);

	const dispatch = useDispatch();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const songs = await db.song.toArray();
				songs.sort((a, b) => a.title.localeCompare(b.title));
				dispatch(setSongs(songs));
				dispatch(setQueue(songs));
				dispatch(setSongPlaying(0));
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	return (
		<Page config={{ pt: 5, pl: 5, pr: 5 }}>
			<Paper elevation={0} sx={{ borderRadius: 5, padding: 2 }}>
				<TitlePage title="My músic" />
				<Box></Box>
				<SongsTable songs={songs} />
			</Paper>
		</Page>
	);
}
