import React, { useEffect, useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { useNavigate, useParams } from 'react-router-dom';
import Page from '../components/Page';
import AlbumCard from '../components/Card/AlbumCard';
import { Stack } from '@mui/system';
import { Typography, AppBar, Toolbar, Grid } from '@mui/material';
import TitlePage from '../components/TitlePage';
import { db } from '../services/db';

export default function Albums() {
const [albums, setAlbums] = useState(null)
	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await db.album.toArray();
				// console.log(result);
				setAlbums(result)
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
			{albums?.map(album => (
				<Grid key={album.albumId} item xs={12} md={6} xl={4}>
					<AlbumCard album={album} />
				</Grid>
			))}
		</Grid>
		</Page>
	);
}
