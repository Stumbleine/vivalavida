import { Button, Stack, TextField } from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import {useState} from 'react';
import * as Yup from 'yup';


export default function AlbumForm() {
  
  const [selectedFile, setSelectedFile] = useState(null);

  const formik = useFormik({
    initialValues: {
      title: '',
      genere: '',
      artist: '',
      album: '',
      duration: '',
      linkMusic: '',
    },
    enableReinitialize: true,
    validationSchema: Yup.object().shape({
      title: Yup.string().required("El titulo es requerido"),
      gender: Yup.string().required("El genero es requerido"),
      artist: Yup.string().required("El artista es requerido"),
      // album: Yup.string().required("El album es requerido"),
      duration: Yup.string().required("La duracion es requerida"),
      linkMusic: Yup.string().required("El link es requerido")
    }),
    onSubmit: values => {
      console.log('Inside on SUBMIT');
      const add = async () => {
        const formData = new FormData();
        formData.append('image', selectedFile);
				await fetch('http://localhost:4000/api/artist/image', {
        method: 'POST',
        body: formData,
      });
			};
			add();
    },
  });
  const { getFieldProps, values, errors, touched, isSubmitting } = formik;


  const handleFileChange = (event, setFieldValue) => {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete>
        <Stack direction="column" spacing={2} marginLeft={40} marginTop={15} marginRight={40} >
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
          {/* <TextField
            fullWidth
            label="Album"
            {...getFieldProps('album')}
            error={Boolean(touched.album && errors.album)}
            helperText={touched.album && errors.album}
          /> */}
           {/* <TextField
            fullWidth
            type="file"
            label="Album"
            onChange={handleFileChange}
            helperText={touched.album && errors.album}
          /> */}
          <input
            type="file"
            label="Album"
            onChange={(event) => {
              // formik.setFieldValue("image", event.currentTarget.files[0]);
              handleFileChange(event)
            }}
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
          <Button type="submit">Guardar</Button>
        </Stack>
      </Form>
    </FormikProvider>
  );
}