import { AppBar, Box, Container, IconButton, SvgIcon, Toolbar } from '@mui/material';
import React from 'react';
import NavigationBtn from '../components/NavigationBtn';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../store/SettingSlice';
import { ReactComponent as Moon } from '../assets/icons/moon.svg';
import { ReactComponent as Sun } from '../assets/icons/sun.svg';

export default function Navbar({ hanldeOpenSideBar }) {
	const dispatch = useDispatch();
	const { theme } = useSelector(state => state.setting);
	return (
		<AppBar
			elevation={0}
			sx={{
				bgcolor: 'primary.main',
				zIndex: theme => theme.zIndex.drawer + 1,
			}}>
			<Container maxWidth="xl">
				<Toolbar disableGutters sx={{ justifyContent: 'center' }}>
					{/* toolbar icons */}
					<Box
						sx={{
							flexGrow: 1,
							display: 'flex',
							justifyContent: 'flex-start',
						}}>
						ss
					</Box>
					{/* navlinks */}
					<Box>
						<NavigationBtn label="My Music" route="/my-music" />
						<NavigationBtn label="Playlists" route="/playlists" />
						<NavigationBtn label="My Tunes" route="/my-tunes" />
						<NavigationBtn label="Artists" route="/artists" />
						<NavigationBtn label="Register" route="/register-tune" />
					</Box>
					{/* options */}
					<Box
						sx={{
							flexGrow: 1,
							display: 'flex',
							justifyContent: 'flex-end',
						}}>
						<IconButton sx={{ ml: 1 }} onClick={() => dispatch(setTheme())}>
							{theme === 'dark' ? (
								<SvgIcon
									sx={{
										color: 'text.icon',
										'&:hover': {
											color: 'terciary.main',
										},
									}}>
									<Sun />
								</SvgIcon>
							) : (
								<SvgIcon
									sx={{
										color: 'text.icon',
										'&:hover': {
											color: 'terciary.main',
										},
									}}>
									<Moon />
								</SvgIcon>
							)}
						</IconButton>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

// <Box>
//   <IconButton sx={{ ml: 1 }} onClick={changeMode}>
//     {mode === "dark" ? (
//       <LightModeIcon sx={{ color: "text.icon" }}></LightModeIcon>
//     ) : (
//       <NightlightIcon sx={{ color: "text.icon" }}></NightlightIcon>
//     )}
//   </IconButton>
// </Box>;
