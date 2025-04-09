// src/components/Header.jsx
import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../assets/logo.png';

export default function Header() {
  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <Container maxWidth="lg" sx={{ my: 2 }}>
        <Toolbar disableGutters>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <RouterLink to="/">
              <img
                src={Logo}
                alt="Logo Gobierno Digital"
                style={{ width: 250, height: 'auto' }}
              />
            </RouterLink>

            <Box display="flex" gap={2}>
              <Button component={RouterLink} to="/" color="inherit">Inicio</Button>
              <Button component={RouterLink} to="/servicios" color="inherit">Servicios</Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
