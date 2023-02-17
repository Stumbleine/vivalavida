import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import Player from './Player';
import { Box } from '@mui/material';

function Dashboard() {
	const [openSideBar, setOpenSideBar] = useState(false);
	return (
		<Box sx={{ height: '100vh' }}>
			<Navbar handleOpenSideBar={() => setOpenSideBar(true)} />
			<Sidebar open={openSideBar} handleCloseSideBar={() => setOpenSideBar(false)} />
			<>
				<Outlet />
			</>
			<Player />
		</Box>
	);
}

export default Dashboard;
