/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
  },
});

function RegisterForm() {
  const { isLoged, register } = useShop();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoged()) navigate('/');
  }, [isLoged()]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    register(
      data.get('username'),
      data.get('name'),
      data.get('lastname'),
      data.get('phone'),
      data.get('password'),
    );
  };

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
            <Link to="/">
              <Typography sx={{ display: 'flex', justifyContent: 'center', color: 'black' }}>
                Volver al inicio
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default RegisterForm;
