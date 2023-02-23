import { Button } from '@mui/material';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function NavigationBtn({ route, label, type }) {
	const location = useLocation();
	const active = route ? location.pathname === route : false;
	return (
		<Button
			component={NavLink}
			to={route}
			sx={{
				color: active ? 'text.active' : 'terciary.main',
				fontSize: '100%',
				background: 'none',
				textTransform: 'none',
				px: 1,
			}}>
			{label}
		</Button>
	);
}
