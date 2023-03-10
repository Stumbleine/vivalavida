import React from 'react';
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function AlbumCard({ album }) {
	const navigate = useNavigate();

	return (
		<Card sx={{ borderRadius: 2, display: 'flex' }}>
			<CardMedia
				component={'img'}
				image={album.coverImage}
				sx={{ height: 'auto', width: 140 }}></CardMedia>
			<CardContent sx={{ width: '100%' }}>
				<Typography>{album.title}</Typography>
				<Typography variant="subtitle2">{album.launchYear}</Typography>
				<Typography variant="caption" sx={{ color: 'gray' }}>
					{album.gender}
				</Typography>
				<CardActions sx={{ p: 0, justifyContent: 'flex-end', mt: 1 }}>
					<Button
						variant="contained"
						size="small"
						onClick={() => navigate(`/album/${album.albumId}`, { state: { album } })}>
						View album
					</Button>
				</CardActions>
			</CardContent>
		</Card>
	);
}
