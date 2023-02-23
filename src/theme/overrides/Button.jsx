import { blue, grey } from '@mui/material/colors';

export default function Button(theme) {
	return {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
					borderRadius: 15,
					color: grey[200],
					backgroundColor: theme.palette.secondary.main,
					// color: 'white',
					// theme.palette.mode === 'dark'
					// 	? theme.palette.secondary.main
					// 	: theme.palette.secondary.main,
				},
				sizeLarge: {
					height: 48,
				},
				// 	containedInherit: {
				// 		borderRadius: 10,
				// 	},

				// 	outlinedInherit: {
				// 		border: `1px solid ${theme.palette.grey[500_32]}`,
				// 		'&:hover': {
				// 			backgroundColor: theme.palette.action.hover,
				// 		},
				// 	},
				// 	textInherit: {
				// 		'&:hover': {
				// 			backgroundColor: theme.palette.action.hover,
				// 		},
				// 	},
			},
		},
	};
}
