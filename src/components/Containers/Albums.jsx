import { Grid } from '@mui/material';
import React from 'react';
import AlbumCard from '../Card/AlbumCard';

export default function Albums({ albums }) {
	return (
		<Grid container spacing={2}>
			{albums?.map(album => (
				<Grid key={album.id} item xs={12} md={6} xl={4}>
					<AlbumCard album={album} />
				</Grid>
			))}
		</Grid>
	);
}
