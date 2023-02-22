import { Button, Stack, TextField, Select, MenuItem, Input, Chip, InputLabel } from '@mui/material';
import { Field, Form, FormikProvider, useFormik } from 'formik';
import { React, useState } from 'react';
import * as Yup from 'yup';
import { addArtist } from '../../services/artist';
import { convertToB64 } from '../../Utils/ConvertB64';

export default function ArtistForm() {

	const [selectedFile, setSelectedFile] = useState(null);

	const formik = useFormik({
		initialValues: {
			name: '',
			genders: [],
			members: '',
			website: '',
			image: '',
		},
		enableReinitialize: true,
		validationSchema: Yup.object().shape({
			name: Yup.string().required('El titulo es requerido'),
			genders: Yup.array().min(1, 'Al menos un género es requerido'),
			members: Yup.string().required('Los miembros son requeridos'),
			website: Yup.string().required('El sitio web es requerido'),
			// image: Yup.mixed().required('La imagen es requerida')
		}),
		onSubmit: values => {
			const add = async () => {
				const b64 = await convertToB64(selectedFile);
				console.log({ ...values, image: b64 });
				await addArtist({ ...values, image: b64 });
				const formData = new FormData();
				formData.append('image', selectedFile);
				await fetch('http://localhost:4000/api/image', {
					method: 'POST',
					body: formData,
				}).then(window.location.reload(false));
			};
			add();
		},
	});
	const { getFieldProps, values, errors, touched, isSubmitting } = formik;

	const handleChange = (event) => {
		const { value } = event.target;
		formik.setFieldValue('genders', value);
	};

	const handleFileChange = (event) => {
		console.log(event.target.files[0]);
		setSelectedFile(event.target.files[0]);
	};

	return (
		<FormikProvider value={formik}>
			<Form autoComplete>
				<Stack direction="column" spacing={2}>
					<TextField
						fullWidth
						label="Name"
						{...getFieldProps('name')}
						error={Boolean(touched.name && errors.name)}
						helperText={touched.name && errors.name}
					/>
					<InputLabel id="genres-label">Géneros</InputLabel>
					<Select
						labelId="genres-label"
						id="genders"
						fullWidth
						multiple
						value={values.genders}
						onChange={handleChange}
						error={Boolean(touched.genders && errors.genders)}
						helperText={touched.genders && errors.genders}
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
						label="Miembros"
						{...getFieldProps('members')}
						error={Boolean(touched.members && errors.members)}
						helperText={touched.members && errors.members}
					/>
					<TextField
						fullWidth
						label="Página Web"
						{...getFieldProps('website')}
						error={Boolean(touched.website && errors.website)}
						helperText={touched.website && errors.website}
					/>
					<InputLabel>Imagen de Artista</InputLabel>
					<input
            type="file"
            label="Imagen"
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
