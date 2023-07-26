/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { REGISTER_USER } from '../Operations/Mutation';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
  },
});

function RegisterForm({ setToken }) {
  const [loginAdmin, result] = useMutation(REGISTER_USER);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    loginAdmin({
      variables: {
        username: data.get('username'),
        password: data.get('password'),
        name: data.get('name'),
        phone: data.get('phone'),
        lastname: data.get('lastname'),
      },
    });
  };

  useEffect(() => {
    if (result.data) {
      const { value: token } = result.data.loginAdmin;
      setToken(token);
      localStorage.setItem('admin-login-token', token);
    }
  }, [result.data]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        component="main"
        sx={{
          position: 'absolute',
          top: -50,
          left: 0,
          bgcolor: '#f4f4f4',
          maxWidth: '100000px',
          width: '100%',
          height: '100vh',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '500px',
          }}
          maxWidth="xs"
        >
          <Avatar sx={{ m: 1, bgcolor: 'secundary.main' }} />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastname"
              label="LastName"
              name="lastname"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone"
              name="phone"
              type="number"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              type="password"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, fontWeight: 'bold' }}>
              Sign in
            </Button>
            <Link to="/login">
              <Typography sx={{ display: 'flex', justifyContent: 'center', color: 'black' }}>
                Ya tienes cuenta?
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default RegisterForm;
