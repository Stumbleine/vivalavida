import { Button, Stack, TextField, Select, MenuItem, InputLabel } from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import {React, useState, useEffect} from 'react';
import * as Yup from 'yup';
import { addSong } from '../../services/song';
import { db } from '../../services/db';
import { setProfile } from '../../store/AlbumSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function SongForm() {

	const { albumProfile } = useSelector(state => state.album);

	const dispatch = useDispatch();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const albums = await db.album.toArray();
				const songs = await db.song.toArray();
				dispatch(setProfile({ albums, songs }));
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	const formik = useFormik({
		initialValues: {
			albumId: 1,
			title: '',
			gender: '',
			launchYear: '',
			link: '',
			duration: ''
		},
		enableReinitialize: true,
		validationSchema: Yup.object().shape({
			albumId: Yup.number().required('El album es requerido'),
			title: Yup.string().required('El titulo es requerido'),
			gender: Yup.string().required('El genero es requerido'),
			launchYear: Yup.number().required('El año de lanzamiento es requerido'),
			link: Yup.string().required('El link es requerido'),
			duration: Yup.string().required('La duracion es requerida'),
		}),
		onSubmit: values => {
			const add = async () => {
				console.log({ ...values });
				await addSong({ ...values });
			};
			add();
		},
	});
	const { getFieldProps, values, errors, touched, isSubmitting } = formik;

	const handleChangeAlbum = (event) => {
		const { value } = event.target;
		formik.setFieldValue('albumId', value);
	};

	const handleChangeGender = (event) => {
		const { value } = event.target;
		formik.setFieldValue('gender', value);
	};

	return (
		<FormikProvider value={formik}>
			<Form autoComplete>
				<Stack direction="column" spacing={2}>

					<InputLabel id="album-label">Album</InputLabel>

					<Select
						labelId="album-label"
						id="albumId"
						fullWidth
						value={values.albumId}
						onChange={handleChangeAlbum}
						error={Boolean(touched.albumId && errors.albumId)}
						helperText={touched.albumId && errors.albumId}
					>
						{albumProfile?.albums.map(album => (
							<MenuItem key={album.albumId} value={album.albumId}>{album.title}</MenuItem>
						))}
					</Select>


					<TextField
						fullWidth
						label="Titulo"
						{...getFieldProps('title')}
						error={Boolean(touched.title && errors.title)}
						helperText={touched.title && errors.title}
					/>

					<InputLabel id="gender-label">Genero</InputLabel>
					<Select
						labelId="gender-label"
						id="gender"
						fullWidth
						value={values.gender}
						onChange={handleChangeGender}
						error={Boolean(touched.gender && errors.gender)}
						helperText={touched.gender && errors.gender}
					>
						<MenuItem value="rock">Rock</MenuItem>
						<MenuItem value="pop">Pop</MenuItem>
						<MenuItem value="jazz">Jazz</MenuItem>
						<MenuItem value="reggae">Reggae</MenuItem>
						<MenuItem value="metal">Metal</MenuItem>
						<MenuItem value="edm">EDM</MenuItem>
					</Select>

					<TextField
						label="Año de lanzamiento"
						{...getFieldProps('launchYear')}
						error={Boolean(touched.launchYear && errors.launchYear)}
						helperText={touched.launchYear && errors.launchYear}
					/>

					<TextField
						label="LinkMusic"
						{...getFieldProps('link')}
						error={Boolean(touched.link && errors.link)}
						helperText={touched.link && errors.link}
					/>

					<TextField
						label="Duracion"
						{...getFieldProps('duration')}
						error={Boolean(touched.duration && errors.duration)}
						helperText={touched.duration && errors.duration}
					/>

					<Button type="submit" variant="contained">
						Guardar
					</Button>
				</Stack>
			</Form>
		</FormikProvider>
	);
}
