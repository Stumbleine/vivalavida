import React from 'react';
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
	Chip,
	Box,
	CardActionArea,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ArtistCard({ artist }) {
	const navigate = useNavigate();

	return (
		<Card sx={{ borderRadius: 4 }}>
			<CardActionArea
				onClick={() =>
					navigate(`/artist-profile/${artist.artistId}`, { state: { artist: artist } })
				}>
				<CardMedia
					component={'img'}
					image={artist.image}
					sx={{ height: 140, width: '100%' }}></CardMedia>
				<CardContent sx={{ p: 1 }}>
					<Typography>{artist.name}</Typography>
					<Typography variant="body2" color="textSecondary">
						1 tracks, 1 albums
					</Typography>
					<Box sx={{ mt: 1 }}>
						{artist.genders.map((gender, index) => (
							<Chip
								key={index}
								label={gender}
								variant="filled"
								size="small"
								sx={{ mr: 0.5, mt: 0.5 }}
							/>
						))}
					</Box>
				</CardContent>
			</CardActionArea>
			{/* <CardActions>
        
				<button onClick={() => navigate(`/albums/${artist.artistId}`)}>Plus</button>
			</CardActions> */}
		</Card>
	);
}
