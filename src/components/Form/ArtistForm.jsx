import { Button, Stack, TextField } from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { addArtist } from '../../services/artist';

export default function ArtistForm() {
	const formik = useFormik({
		initialValues: {
			name: '',
			genere: '',
			integranst: '',
			webSite: '',
			image: '',
		},
		enableReinitialize: true,
		validationSchema: Yup.object().shape({
			title: Yup.string().required('El titulo es requerido'),
			gender: Yup.string().required('El genero es requerido'),
			yearLaunch: Yup.string().required('El año de lanzamiento es requerida'),
			coverImage: Yup.string().required('la imagen de la portada es requerida'),
		}),
		onSubmit: values => {
			const add = async () => {
				await addArtist(values);
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
						label="Año de lanzamiento"
						{...getFieldProps('yearLaunch')}
						error={Boolean(touched.yearLaunch && errors.yearLaunch)}
						helperText={touched.yearLaunch && errors.yearLaunch}
					/>
					<TextField
						fullWidth
						label="Imagen de Portada"
						{...getFieldProps('coverImage')}
						error={Boolean(touched.coverImage && errors.coverImage)}
						helperText={touched.coverImage && errors.coverImage}
					/>
					<Button type="submit" variant="contained">
						Guardar
					</Button>
				</Stack>
			</Form>
		</FormikProvider>
	);
}
