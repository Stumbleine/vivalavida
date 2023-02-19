import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from './theme';
import Router from './routes';
import { useSelector } from 'react-redux';
import { useLiveQuery } from 'dexie-react-hooks';
import { useEffect } from 'react';
import artistsMock from './mocks/artistsMock';
import { addArtist } from './services/artist';
import songsMock from './mocks/songsMock';
import { db } from './services/db';
import { addAlbum } from './services/album';
import { addSong } from './services/song';
import albumsMock from './mocks/albumsMock';

function App() {
	const theme = useSelector(state => state.setting.theme);
	const artists = useLiveQuery(() => db.artist?.toArray());

	useEffect(() => {
		if (artists?.length === 0) {
			artistsMock.forEach(a => {
				addArtist(a);
			});
			albumsMock.forEach(a => {
				addAlbum(a);
			});
			songsMock.forEach(a => {
				addSong(a);
			});
		}
	}, [artists]);

	return (
		<BrowserRouter>
			<ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
				<CssBaseline />
				<Router />
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
