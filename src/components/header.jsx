import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import Logorednegro from '../assets/logorednegro.png';
import Logoredblanco from '../assets/logoredblanco.png';
import { useState } from 'react';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { text: 'Inicio', path: '/' },
    { text: 'Servicios', path: '/servicios' }
  ];

  return (
    <>
      {/* Barra informativa */}
      <Box sx={{ bgcolor: '#002c4b', color: 'white', py: 1 }}>
        <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <img
              src={Logoredblanco}
              alt="Logo Red Blanco"
              style={{ width: 25, height: 'auto' }}
            />
          <Typography variant="body2">
            Sitio oficial de la Asociación Civil Red Ciudadana
          </Typography>
        </Container>
      </Box>

      {/* AppBar principal */}
      <AppBar position="static" color="inherit" elevation={0}>
        <Container maxWidth="lg" sx={{ my: 2 }}>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', width: '100%' }}>
            <RouterLink to="/" >   
              <Box
                sx={{
                  display: { xs: 'block', md: 'flex' },
                  alignItems: 'center',
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                <img
                  src={Logorednegro}
                  alt="Logo Red Ciudadana"
                  style={{ width: 220, height: 'auto'}}
                />
                <img
                  src={Logo}
                  alt="Logo Gobierno Digital"
                  style={{ width: 220, height: 'auto' }}
                />
              </Box>        
            </RouterLink>

            {/* Botones para escritorio */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              {navItems.map(({ text, path }) => (
                <Button key={path} component={RouterLink} to={path} color="inherit">
                  {text}
                </Button>
              ))}
            </Box>

            {/* Botón hamburguesa para móviles */}
            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' } }}
              edge="end"
              color="inherit"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>

            {/* Drawer para navegación móvil */}
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                <List>
                  {navItems.map(({ text, path }) => (
                    <ListItem button key={path} component={RouterLink} to={path}>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
