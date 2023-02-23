import { Box, Paper, TextField, Typography } from '@mui/material';
import React from 'react';

export default function FileUploader({ handleFileChange, selectedFile, preload }) {
	return (
		<label htmlFor="artist-cover-upload">
			<TextField
				id="artist-cover-upload"
				type="file"
				label="Imagen"
				sx={{ display: 'none' }}
				required
				onChange={event => {
					handleFileChange(event);
				}}
			/>
			<Box
				sx={{
					height: 60,
					width: '100%',
					p: 1,
					border: 1,
					borderColor: 'secondary.main',
					borderRadius: 3,
					borderStyle: 'dashed',
					display: 'flex',
					alignItems: 'center',
					cursor: 'pointer',
				}}>
				{selectedFile ? (
					<Paper
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							border: 1,
							borderColor: 'secondary.main',
							borderRadius: 2,
						}}>
						<Box
							component="img"
							sx={{ height: 40, width: 40, objectFit: 'cover' }}
							src={preload}
						/>
						<Typography color="textSecondary" sx={{ mx: 1 }}>
							{selectedFile.name}
						</Typography>
					</Paper>
				) : (
					<Typography sx={{ width: 1, textAlign: 'center', color: 'text.secondary' }}>
						Upload file
					</Typography>
				)}
			</Box>
		</label>
	);
}
