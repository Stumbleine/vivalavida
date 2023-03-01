import {
	Box,
	Stack,
	SvgIcon,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { ReactComponent as Play } from '../../assets/icons/play.svg';
import { ReactComponent as Pause } from '../../assets/icons/pause.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setQueue, setSongPlaying } from '../../store/PlayerSlice';
export default function SongsTable({ songs }) {
	const dispatch = useDispatch();
	const TABLE_HEAD = [
		{ label: '#', id: 'index' },
		{ label: 'Title', id: 'title' },
		{ label: 'Duration', id: 'duration' },
		{ label: 'Gender', id: 'gender' },
		{ label: 'Launch Year', id: 'launchyear' },
		{ label: 'Actions', id: 'action' },
	];
	const { songPlaying, isPlaying } = useSelector(state => state.player);
	const [hoverSong, setHoverSong] = useState({
		showPlay: false,
		songId: null,
		isPlaying: false,
	});
	const onHoverSong = song => {
		// console.log('hover', song);
		setHoverSong({ showPlay: true, songId: song.songId, isPlaying: false });
	};

	const onLeaveSong = song => {
		setHoverSong({ ...hoverSong, showPlay: false, songId: song.songId });
	};
	const playSong = id => {
		// dispatch(setQueue(songs));
		dispatch(setSongPlaying(id));
	};

	return (
		<TableContainer sx={{ bgcolor: 'primary.main', borderRadius: 5 }}>
			<Table>
				<TableHead sx={{ bgcolor: 'primary.main' }}>
					<TableRow>
						{TABLE_HEAD.map(cell => (
							<TableCell key={cell.id} sx={{ py: 1 }}>
								<Typography color="textSecondary" noWrap>
									{cell.label}
								</Typography>
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{songs?.map((song, index) => (
						<TableRow
							key={index + 1}
							hover
							// onMouseOver={() => onHoverSong(song)}
							// onMouseLeave={() => onLeaveSong(song)}
							onClick={() => {
								playSong(index);
							}}>
							<TableCell>
								<Typography variant="body2" color="textSecondary" noWrap>
									{index + 1}
								</Typography>
							</TableCell>
							<TableCell>
								<Stack direction="row" spacing={1}>
									<Box
										component="span"
										sx={{
											width: 50,
											height: 50,
											borderRadius: 2,
											position: 'relative',
											// background: 'pink',
										}}>
										<Box
											component="img"
											src={song.coverImage}
											sx={{
												width: 50,
												height: 50,
												borderRadius: 2,
											}}
										/>
										{/* {hoverSong.showPlay && hoverSong.songId === song.songId && (
											<Box
												sx={{
													width: '100%',
													height: '100%',
													background: 'rgba(31, 30, 31, 0.5)',
													zIndex: 'tooltip',
													borderRadius: 'inherit',
													position: 'absolute',
													textAlign: 'center',
													display: 'flex',
													justifyContent: 'center',
													alignItems: 'center',
													bottom: 0,
												}}>
												{!hoverSong.isPlaying ? (
													<SvgIcon
														sx={{
															color: 'text.icon',
															'&:hover': {
																color: 'terciary.main',
															},
														}}>
														<Play />
													</SvgIcon>
												) : (
													<SvgIcon
														sx={{
															color: 'text.icon',
															'&:hover': {
																color: 'terciary.main',
															},
														}}>
														<Pause />
													</SvgIcon>
												)}
											</Box>
										)} */}
									</Box>
									<Typography variant="body2" color="textSecondary" noWrap>
										{song.title}
									</Typography>
								</Stack>
							</TableCell>
							<TableCell>
								<Typography variant="body2" color="textSecondary" noWrap>
									{song.duration}
								</Typography>
							</TableCell>
							<TableCell>
								<Typography variant="body2" color="textSecondary" noWrap>
									{song.gender}
								</Typography>
							</TableCell>
							<TableCell>
								<Typography variant="body2" color="textSecondary" noWrap>
									{song.launchYear}
								</Typography>
							</TableCell>
							<TableCell>
								{isPlaying && songPlaying.songId === song.songId ? (
									<SvgIcon
										sx={{
											color: 'text.icon',
											'&:hover': {
												color: 'terciary.main',
											},
										}}>
										<Pause />
									</SvgIcon>
								) : (
									<SvgIcon
										sx={{
											color: 'text.icon',
											'&:hover': {
												color: 'terciary.main',
											},
										}}>
										<Play />
									</SvgIcon>
								)}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
