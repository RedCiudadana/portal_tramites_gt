// src/components/Footer.jsx
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, YouTube, LinkedIn, Instagram } from '@mui/icons-material';
import Logored from '../assets/logored.png';

export default function Footer() {
  return (
    <>
        <Box sx={{ bgcolor: '#002c4b', color: 'white', py: 4, my: 2 }}>
            <Container maxWidth="lg" sx={{ my: 4}}>
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item xs={12} md={4}>
                        <a href="https://redciudadana.org.gt" target="_blank" rel="noopener noreferrer">
                            <img
                                src={Logored}
                                alt="Logo Red Ciudadana"
                                style={{ width: 250, height: 'auto', marginBottom: '16px' }}
                            />
                        </a>
                        <Typography variant="body2">
                        En Red Ciudadana trabajamos para fortalecer la transparencia y promover la participación activa.
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                        {[Facebook, Twitter, Instagram, LinkedIn, YouTube].map((Icon, i) => (
                            <IconButton key={i} sx={{ color: 'white' }}>
                            <Icon />
                            </IconButton>
                        ))}
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Typography variant="subtitle1" gutterBottom>Enlaces</Typography>
                        {['Inicio','Contacto'].map((text, i) => (
                            <Link href="#" key={i} underline="hover" color="inherit" display="block">{text}</Link>
                        ))}
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Typography variant="subtitle1" gutterBottom>Dirección</Typography>
                        <Typography variant="body2">Zona 10, Ciudad de Guatemala</Typography>
                        <Typography variant="body2">info@redciudadana.org.gt</Typography>
                        <Typography variant="body2">Lunes a viernes, 8:00 a.m. - 5:00 p.m.</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        <Box sx={{ bgcolor: '#fff', py: 2, my: 2 }}>
            <Container maxWidth="lg" align="center">
                <Typography variant="body">
                Asociación Civil Red Ciudadana © 2025
                </Typography>
            </Container>
        </Box>
    </>
  );
}
