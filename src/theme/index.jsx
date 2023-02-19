import { createTheme } from '@mui/material/styles';
import { green, grey, orange, red } from '@mui/material/colors';
// import ComponentsOverrides from "./ComponentsOverrides";

const PRIMARY = '#181818';
const SECONDARY = '#7B818A';
const TERCIARY = '#EEF2F7';
const TEXT_PRIMARY = '#F5F5F5';

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: PRIMARY,
		},
		secondary: {
			main: SECONDARY,
		},
		terciary: {
			main: TERCIARY,
		},
		background: {
			paper: PRIMARY,
			default: SECONDARY,
		},
		text: {
			primary: TEXT_PRIMARY,
			secondary: SECONDARY,
			icon: SECONDARY,
		},
		warning: {
			main: orange[800],
			light: orange[500],
		},
		error: {
			main: red[700],
			light: red[400],
			delete: red[200],
		},
		success: {
			main: green[700],
			light: green[400],
		},
	},
	typography: {
		fontFamily: "'Poppins', sans-serif",
	},
});

export const lightTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#EEF2F7',
		},
		secondary: {
			main: '#181818',
		},
		terciary: {
			main: '#7B818A',
		},
		background: {
			paper: '#fff',
			default: '#181818',
		},
		warning: {
			main: orange[800],
			light: orange[500],
		},
		error: {
			main: red[700],
			light: red[400],
			delete: red[200],
		},
		success: {
			main: green[700],
			light: green[400],
		},
	},
	typography: {
		fontFamily: "'Poppins', sans-serif",
	},
});

// lightTheme.components = ComponentsOverrides(lightTheme);
