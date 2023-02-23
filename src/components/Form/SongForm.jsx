import { Button, Stack, TextField, Select, MenuItem, InputLabel } from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import {React, useState, useEffect} from 'react';
import * as Yup from 'yup';
import { addSong } from '../../services/song';
import { db } from '../../services/db';
import { setAlbums, setProfile } from '../../store/AlbumSlice';
import { useDispatch, useSelector } from 'react-redux';
import {convertToB64} from '../../Utils/ConvertB64';
import { setArtists } from '../../store/ArtistSlice';

export default function SongForm() {

	const {artists} = useSelector(state => state.artist);
	const {albums} = useSelector(state => state.album);
	const [selectedFile, setSelectedFile] = useState(null);
	
	const albumsFromArtist = albums?.filter((album) => {
			return album.artistId === 1
		})	
	
	const [albumFromArtist, setAlbumFromArtist] = useState(albumsFromArtist);

	const dispatch = useDispatch();
	useEffect(() => {

		const fetchData = async () => {
			try {
				const albums = await db.album.toArray();
				const artists = await db.artist.toArray();
				dispatch(setAlbums(albums));
				dispatch(setArtists(artists));
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	const formik = useFormik({
		initialValues: {
			albumId: 1,
			artistId: 1,
			title: '',
			gender: '',
			launchYear: '',
			link: '',
			duration: '',
			artistName: '',
			albumTitle: '',
			coverImage: ''
		},
		enableReinitialize: true,
		validationSchema: Yup.object().shape({
			albumId: Yup.number().required('El album es requerido'),
			artistId: Yup.number().required('El artista es requerido'),
			title: Yup.string().required('El titulo es requerido'),
			gender: Yup.string().required('El genero es requerido'),
			launchYear: Yup.number().required('El año de lanzamiento es requerido'),
			// link: Yup.string().required('El link es requerido'),
			// duration: Yup.string().required('La duracion es requerida'),
		}),
		onSubmit: values => {
			
			const artistObject = artists?.find((artist) => artist.artistId === values.artistId)
			const albumObject = albums?.find((album) => album.albumId === values.albumId)
			values = {...values, artistName: artistObject.name, albumTitle: albumObject.title, coverImage: albumObject.coverImage};

			const add = async () => {
				const path = `/songs/${selectedFile.name}`;
				await addSong({ ...values, link: path });
				const formData = new FormData();
				formData.append('song', selectedFile);
				await fetch('http://localhost:4000/api/song', {
					method: 'POST',
					body: formData,
				}).then(setTimeout(() => {
					 window.location.reload(false)
				}, 2000));
			};
			add();
		},
	});
	const { getFieldProps, values, errors, touched, isSubmitting } = formik;

	const handleChangeAlbum = (event) => {
		const { value } = event.target;
		formik.setFieldValue('albumId', value);
	};

	const handleChangeArtist = (event) => {
		const { value } = event.target;
		formik.setFieldValue('artistId', value);
		const albumsFromArtist = albums?.filter((album) => {
			return album.artistId === value
		})
		
		setAlbumFromArtist(albumsFromArtist);
	};

	const handleChangeGender = (event) => {
		const { value } = event.target;
		formik.setFieldValue('gender', value);
	};

	const handleFileChange = (event) => {
    
    setSelectedFile(event.target.files[0]);
  };

	return (
		<FormikProvider value={formik}>
			<Form autoComplete>
				<Stack direction="column" spacing={2}>

					<InputLabel id="artist-label">Artist</InputLabel>
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


					<InputLabel id="album-label">Album</InputLabel>

					{/* <Select
						labelId="album-label"
						id="albumId"
						fullWidth
						value={values.albumId}
						onChange={handleChangeAlbum}
						error={Boolean(touched.albumId && errors.albumId)}
						helperText={touched.albumId && errors.albumId}
					>
						{albums?.map(album => (
							<MenuItem key={album.albumId} value={album.albumId}>{album.title}</MenuItem>
						))}
					</Select> */}

					<Select
						labelId="album-label"
						id="albumId"
						fullWidth
						value={values.albumId}
						onChange={handleChangeAlbum}
						error={Boolean(touched.albumId && errors.albumId)}
						helperText={touched.albumId && errors.albumId}
					>
						{albumFromArtist?.map(album => (
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
					{/* <TextField
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
					/> */}
					<InputLabel>Canción</InputLabel>
					<input
            type="file"
            label="song"
						name='song'
						required
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
