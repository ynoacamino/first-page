/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
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

function LoginForm() {
  const { isLoged, login } = useShop();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoged()) navigate('/');
  }, [isLoged()]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    login(
      data.get('username'),
      data.get('password'),
    );
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <Box sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          top: -100,
          left: 0,
          bgcolor: '#f4f4f4',
          width: '100%',
          height: '100vh',
          zIndex: 1000,
        }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secundary.main' }} />
          <Typography component="h1" variant="h5">
            Log in
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
              id="password"
              label="Password"
              name="password"
              type="password"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, fontWeight: 'bold' }}>
              Log in
            </Button>
            <Link to="/singin">
              <Typography sx={{ display: 'flex', justifyContent: 'center', color: 'black' }}>
                Aun no tienes cuenta?
              </Typography>
            </Link>
            <Link to="/">
              <Typography sx={{ display: 'flex', justifyContent: 'center', color: 'black' }}>
                Volver al inicio
              </Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default LoginForm;
