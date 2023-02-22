import { Button, Stack, TextField, Select, MenuItem, InputLabel } from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import {React, useState, useEffect} from 'react';
import * as Yup from 'yup';
import { addAlbum } from '../../services/album';
import {convertToB64} from '../../Utils/ConvertB64';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../../services/db';
import { setArtists } from '../../store/ArtistSlice';

export default function AlbumForm() {

	const { artists } = useSelector(state => state.artist);
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await db.artist.toArray();
				dispatch(setArtists(result));
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	const [selectedFile, setSelectedFile] = useState(null);

	const formik = useFormik({
		initialValues: {
			artistId: 1,
			title: '',
			gender: '',
			yearLaunch: '',
			coverImage: '',
		},
		enableReinitialize: true,
		validationSchema: Yup.object().shape({
			artistId: Yup.number().required('El artista es requerido'),
			title: Yup.string().required('El titulo es requerido'),
			gender: Yup.string().required('El genero es requerido'),
			yearLaunch: Yup.string().required('El año de lanzamiento es requerida')
		}),
		onSubmit: values => {
			const add = async () => {
				const b64 = await convertToB64(selectedFile);
				console.log({ ...values, coverImage: b64 });
				await addAlbum({ ...values, coverImage: b64 });
				const formData = new FormData();
				formData.append('coverImage', selectedFile);
				await fetch('http://localhost:4000/api/image', {
					method: 'POST',
					body: formData,
				}).then(window.location.reload(false));
			};
			add();
		},
	});
	const { getFieldProps, values, errors, touched, isSubmitting } = formik;

	const handleFileChange = (event) => {
		console.log(event.target.files[0]);
		setSelectedFile(event.target.files[0]);
	};

	const handleChangeArtist = (event) => {
		const { value } = event.target;
		formik.setFieldValue('artistId', value);
	};

	const handleChangeGender = (event) => {
		const { value } = event.target;
		formik.setFieldValue('gender', value);
	};

	return (
		<FormikProvider value={formik}>
			<Form autoComplete>
				<Stack direction="column" spacing={2}>

					<InputLabel id="artist-label">Artista</InputLabel>

					<Select
						labelId="artist-label"
						id="artistId"
						fullWidth
						value={values.artistId}
						onChange={handleChangeArtist}
						error={Boolean(touched.artistId && errors.artistId)}
						helperText={touched.artistId && errors.artistId}
					>
						{artists?.map(artist => (
							<MenuItem key={artist.artistId} value={artist.artistId}>{artist.name}</MenuItem>
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
						fullWidth
						label="Año de lanzamiento"
						{...getFieldProps('yearLaunch')}
						error={Boolean(touched.yearLaunch && errors.yearLaunch)}
						helperText={touched.yearLaunch && errors.yearLaunch}
					/>

					<InputLabel>Imagen de Portada</InputLabel>
					<input
						type="file"
						label="Imagen del cover"
						onChange={(event) => {
						handleFileChange(event)
						}}
					/>
					<Button type="submit" variant="contained">
						Guardar
					</Button>
				</Stack>
			</Form>
		</FormikProvider>
	);
}
