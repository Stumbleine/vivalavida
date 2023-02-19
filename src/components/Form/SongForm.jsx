import { Button, Stack, TextField } from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { addSong } from '../../services/song';

export default function SongForm() {
	const formik = useFormik({
		initialValues: {
			title: '',
			genere: '',
			yearLaunch: '',
			coverImage: '',
			arraySong: '',
			linkMusic: '',
		},
		enableReinitialize: true,
		validationSchema: Yup.object().shape({
			title: Yup.string().required('El titulo es requerido'),
			gender: Yup.string().required('El genero es requerido'),
			artist: Yup.string().required('El artista es requerido'),
			album: Yup.string().required('El album es requerido'),
			duration: Yup.string().required('La duracion es requerida'),
			linkMusic: Yup.string().required('El link es requerido'),
		}),
		onSubmit: values => {
			const add = async () => {
				await addSong(values);
			};
			add();
		},
	});
	const { getFieldProps, values, errors, touched, isSubmitting } = formik;
	return (
		<FormikProvider value={formik}>
			<Form autoComplete>
				<Stack direction="column" spacing={2}>
					<TextField
						fullWidth
						label="Titulo"
						{...getFieldProps('title')}
						error={Boolean(touched.title && errors.title)}
						helperText={touched.title && errors.title}
					/>
					<TextField
						fullWidth
						label="Genero"
						{...getFieldProps('gender')}
						error={Boolean(touched.gender && errors.gender)}
						helperText={touched.gender && errors.gender}
					/>
					<TextField
						fullWidth
						label="Artista"
						{...getFieldProps('artist')}
						error={Boolean(touched.artist && errors.artist)}
						helperText={touched.artist && errors.artist}
					/>
					<TextField
						fullWidth
						label="Album"
						{...getFieldProps('album')}
						error={Boolean(touched.album && errors.album)}
						helperText={touched.album && errors.album}
					/>
					<TextField
						label="Duracion"
						{...getFieldProps('duration')}
						error={Boolean(touched.duration && errors.duration)}
						helperText={touched.duration && errors.duration}
					/>
					<TextField
						label="LinkMusic"
						{...getFieldProps('linkMusic')}
						error={Boolean(touched.linkMusic && errors.linkMusic)}
						helperText={touched.linkMusic && errors.linkMusic}
					/>
					<Button type="submit" variant="contained">
						Guardar
					</Button>
				</Stack>
			</Form>
		</FormikProvider>
	);
}
