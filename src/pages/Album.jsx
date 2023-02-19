import React from 'react';
import Page from '../components/Page';
import TitlePage from '../components/TitlePage';
import { useLocation } from 'react-router-dom';
import { Box, Chip, Paper, Typography } from '@mui/material';
import SongsTable from '../components/Table/SongsTable';

export default function Album() {
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
						}}>
						<Box
							component="img"
							src={album?.coverImage}
							sx={{ width: 150, height: 150, borderRadius: 5, objectFit: 'cover' }}
						/>
						<Box sx={{ ml: 2 }}>
							<Typography>{album?.title}</Typography>
							<Typography>Launch year: {album?.launchYear}</Typography>

							<Box sx={{ mt: 1 }}>
								{/* {album.gender?.map((gender, index) => ( */}
								<Chip label={album?.gender} size="small" variant="filled" />
								{/* ))} */}
							</Box>
						</Box>
					</Box>
				</Box>
				<Box sx={{ padding: 2 }}>
					<SongsTable songs={album?.songs} />
				</Box>
			</Paper>
		</Page>
	);
}
