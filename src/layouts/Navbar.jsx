import {
	AppBar,
	Box,
	Container,
	IconButton,
	SvgIcon,
	Toolbar,
	Typography,
} from '@mui/material';
import React from 'react';
import NavigationBtn from '../components/NavigationBtn';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../store/SettingSlice';
import { ReactComponent as Moon } from '../assets/icons/moon.svg';
import { ReactComponent as Sun } from '../assets/icons/sun.svg';

export default function Navbar() {
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
					{/* toolbar logo */}
					<Box
						sx={{
							flexGrow: 1,
							display: 'flex',
							justifyContent: 'flex-start',
						}}>
						<Typography
							sx={{
								fontWeight: 'bold',
								fontSize: 20,
							}}>
							VivalavidaPlay
						</Typography>
					</Box>
					{/* navlinks */}
					<Box>
						<NavigationBtn label="My Music" route="/my-music" />
						<NavigationBtn label="Artists" route="/artists" />
						<NavigationBtn label="Albums" route="/albums" />
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
