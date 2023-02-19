import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from './theme';
import Router from './routes';
import { useSelector } from 'react-redux';

function App() {
	const theme = useSelector(state => state.setting.theme);
	console.log(theme);

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
