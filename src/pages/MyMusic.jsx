import React from 'react';
import Page from '../components/Page';
import { Container, Stack, Typography } from '@mui/material';
import TitlePage from '../components/TitlePage';
import SongsList from '../components/List/SongsList';

export default function MyMusic() {
	return (
		<Page config={{ pt: 5, pl: 5, pr: 5 }}>
			<TitlePage title="Mi música" />

			<Stack>
				<SongsList />
			</Stack>
		</Page>
	);
}
