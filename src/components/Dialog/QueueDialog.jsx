import {
	Dialog,
	DialogContent,
	DialogTitle,
	IconButton,
	Slide,
	SvgIcon,
} from '@mui/material';
import React, { useState } from 'react';
import { ReactComponent as Queue } from '../../assets/icons/list.svg';
import SongsTable from '../Table/SongsTable';
import { useSelector } from 'react-redux';
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});
export default function QueueDialog() {
	const { queue } = useSelector(state => state.player);
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<IconButton onClick={handleClickOpen}>
				<SvgIcon
					sx={{
						color: 'text.icon',
						'&:hover': {
							color: 'terciary.main',
						},
					}}>
					<Queue />
				</SvgIcon>
			</IconButton>
			<Dialog
				PaperProps={{
					style: { borderRadius: 15, background: 'primary.main' },
					sx: { bgcolor: 'background.paper', maxWidth: 'xl' },
				}}
				open={open}
				onClose={handleClose}
				TransitionComponent={Transition}>
				<DialogTitle>Queue</DialogTitle>
				<DialogContent>
					<SongsTable songs={queue} />
				</DialogContent>
			</Dialog>
		</>
	);
}
