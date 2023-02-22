import React, { useEffect, useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { useNavigate } from 'react-router-dom';
import Page from '../components/Page';
import ArtistCard from '../components/Card/ArtistCard';
import { Grid, Stack, Typography } from '@mui/material';
import { db } from '../services/db';
import { artistsMock } from '../mocks/artistsMock';
import { addArtist } from '../services/artist';
import { Title } from '@mui/icons-material';
import TitlePage from '../components/TitlePage';
import { useDispatch, useSelector } from 'react-redux';
import { setArtists } from '../store/ArtistSlice';

export default function Artists() {
	const { artists } = useSelector(state => state.artist);
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await db.artist.toArray();
				// console.log(result);
				dispatch(setArtists(result));
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	return (
		<Page config={{ pt: 5, pl: 5, pr: 5 }}>
			<TitlePage title="Artists" />
			<Grid container spacing={2}>
				{artists?.map(artist => (
					<Grid item key={artist.artistId} xs={4} xl={2} md={3}>
						<ArtistCard artist={artist} />
					</Grid>
				))}
			</Grid>
		</Page>
	);
}
