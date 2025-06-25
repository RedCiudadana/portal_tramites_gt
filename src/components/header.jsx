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

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { text: 'Inicio', path: '/' },
    { text: 'Observatorio', path: '/observatorio' },
    { text: 'Instituciones', path: '/instituciones' },
    { text: 'Trámites', path: '/servicios' },
    // { text: 'Contacto', path: '/contacto' }
  ];

  const socialLinks = [
    { icon: <FacebookIcon />, url: 'https://www.facebook.com/redciudadanagt' },
    { icon: <XIcon />, url: 'https://twitter.com/RedxGuate' },
    { icon: <InstagramIcon />, url: 'https://www.instagram.com/redxguate/' },
    { icon: <YouTubeIcon />, url: 'https://www.youtube.com/channel/UCQwc62j7beStZYFzwPxBEQg' }
  ];

  return (
    <>
      {/* Barra informativa */}
      <Box sx={{ bgcolor: '#002c4b', color: 'white', py: 1 }}>
        <Container maxWidth="xl" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <img
              src={Logoredblanco}
              alt="Logo Red Blanco"
              style={{ width: 25, height: 'auto' }}
            />
          <Typography variant="body2" sx={{ color: '#fff' }}>
            Sitio oficial de la Asociación Civil Red Ciudadana
          </Typography>
        </Container>
      </Box>

      {/* AppBar principal */}
      <AppBar position="static" color="inherit" elevation={0}>
        <Container maxWidth="xl" sx={{ my: 2 }}>
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
                  style={{ width: 180, marginRight: '20px', height: 'auto'}}
                />
                {/* <img
                  src={Logo}
                  alt="Logo Gobierno Digital"
                  style={{ width: 180, height: 'auto' }}
                /> */}
              </Box>        
            </RouterLink>

            {/* Botones para escritorio */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
              {navItems.map(({ text, path }, index) => (
                  <Typography
                  key={index}
                  component={RouterLink}
                  to={path}
                  sx={{
                    color: '#02324F',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {text}
                </Typography>            
              ))}

              {/* Íconos de redes sociales */}
              <Box sx={{ display: 'flex', gap: 1, ml: 2 }}>
                {socialLinks.map(({ icon, url }, index) => (
                  <IconButton key={index} component="a" href={url} target="_blank" rel="noopener" sx={{ color: "#02324f" }}>
                    {icon}
                  </IconButton>
                ))}
              </Box>
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
