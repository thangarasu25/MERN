
import 'date-fns';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';

import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Task4 } from './task4'
import { BookmarkAddOutlined } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import React from 'react';

import apiCall from "../tasks/services/apiCall";

import MenuItem from '@mui/material/MenuItem';

import queryClient from "../tasks/services/queryClient";

//no-undef

export function Detailspage() {
  const currencies = [
    {
      value: 'Technology',
      label: 'Technology',
    },
    {
      value: 'Food',
      label: 'Food',
    },
    {
      value: 'Travel',
      label: 'Travel',
    },
  
  ];




  const formSchema = Yup.object({
    title: Yup.string().required('title  is required'),
    description: Yup.string(),
    content: Yup.string().required('Please enter valid content '),
    category :Yup.string().required('Please enter category content'),
    author: Yup.string().required('Please Select category'),
  })


  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {},
    validateOnChange: false,
    validationSchema: formSchema,
    onSubmit: (formValues) => {
      console.log(formValues);

 apiCall.post('/posts', {
  //no-undef
        "id": 20 + Math.floor(Math.random() * 100),
        "title": `  Post`,
        "content": `This is the post`,
        "author": "John Doe",
        "createdAt": "2022-01-01T00:00:00.000Z",
       
    })
      .then(res => {
        // queryClient.invalidateQueries("all-posts");
      })
      .catch(err => {
        console.log(err);
      })

    },
  });

// eslint-disable-next-line
  return (<>

    <Task4 />
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <BookmarkAddOutlined /> 
        </Avatar>
        Book
        <Typography component="h1" variant="h5">

        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="given-name"
                name="title"
                required
                fullWidth
                id="title "
                label="Title "
                autoFocus
                value={values.title}
                onChange={handleChange('title')}
                helperText={errors.title}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                id="description"
                label="description"
                name="description"
                autoComplete="family-name"
                value={values.description}
                onChange={handleChange('description')}
                helperText={errors.description}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="content"
                label="content "
                name="content"
                autoComplete="content"
                value={values.content}
                onChange={handleChange('content')}
                helperText={errors.content}
              />
            </Grid>
            <Grid item xs={12}>
  
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '56ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="category"
          select
          label="category"
          defaultValue="Technology"
          helperText="Please select your category"
          name="category"
          required
          fullWidth
          autoFocus
          value={values.category}
          onChange={handleChange('category')}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField> 
      </div>

  </Box>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="author"
                label="Author"
                type="author"
                id="author"
                value={values.author}
                autoComplete="author"
                onChange={handleChange('author')}
                // helperText={errors.author}
              />
            </Grid>



          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={values.password === ''}
          >
            Save Details
          </Button>

        </Box>
      </Box>
    </Container>
  </>
  )
}