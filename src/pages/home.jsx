// src/pages/Home.jsx
import { useEffect, useState  } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import tramites from '../data/tramites.json';
import Sliderfondo from '../assets/home/sliderfondo.png';
import Sliderdown from '../assets/home/sliderdown.png';

import {
    Box,
    TextField,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardActions,
    Button,
    Link as MuiLink,
  } from '@mui/material';

import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import WorkIcon from '@mui/icons-material/Work';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import CommuteIcon from '@mui/icons-material/Commute';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ForestIcon from '@mui/icons-material/Forest';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EcoIcon from '@mui/icons-material/AttachMoney';
import HouseIcon from '@mui/icons-material/House';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import SecurityIcon from '@mui/icons-material/Security';

const iconMap = {
    'Inscripciones y Registros': <AssignmentTurnedInIcon fontSize="large" />,
    'Trabajo': <WorkIcon fontSize="large" />,
    'Mediación y Diálogo': <RecordVoiceOverIcon fontSize="large" />,
    'Comunicaciones y Transporte': <CommuteIcon fontSize="large" />,
    'Educación, Cultura y Deporte': <MenuBookIcon fontSize="large" />,
    'Medio Ambiente': <ForestIcon fontSize="large" />,
    'Salud': <LocalHospitalIcon fontSize="large" />,
    'Energía': <FlashOnIcon fontSize="large" />,
    'Economía': <AttachMoneyIcon fontSize="large" />,
    'Manejo de Animales y Vegetales': <EcoIcon fontSize="large" />,
    'Territorio, Vivienda e Infraestructura': <HouseIcon fontSize="large" />,
    'Servicios de Migración': <FlightTakeoffIcon fontSize="large" />,
    'Seguridad': <SecurityIcon fontSize="large" />,
};  


export default function Home() {
    useEffect(() => {
        document.title = 'Inicio | Trámites de Guatemala';
    }, []);

    const categorias = [...new Set(tramites.map(t => t.categoria))];
    const destacados = tramites.slice(0, 4); 
    const masConsultados = tramites.slice(4, 12); 

    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/servicios?query=${encodeURIComponent(query)}`);
        }
    };
    
    return (
        <>
            {/* HERO fuera del Container */}
            <Box
                sx={{
                width: '100%',
                backgroundImage: `url(${Sliderfondo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                color: 'white',
                pt: { xs: 8, md: 12 },
                textAlign: 'center',
                px: 2,
                }}
            >
                <Container maxWidth="md">
                    <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'rgba(255,255,255,1)' }}>
                        Plataforma de trámites de Guatemala
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                        Tiene como objetivo facilitar la colaboración y la integración de datos entre entidades públicas y privadas.
                    </Typography>
                </Container>
                <img
                    src={Sliderdown}
                    alt="Slider Image"
                    style={{ width: '100%', height: 'auto' }}
                />
            </Box>
        
            {/* CONTENIDO PRINCIPAL */}

            <Box sx={{ backgroundColor: '#d8e5ed', p: 4, mb:4 }}>
                <Container maxWidth="lg" sx={{ mt: 4, mb: 6,  }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                        <Typography variant="h5" fontWeight="bold">
                        Busca un servicio
                        </Typography>
                    </Box>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            gap: 2,
                            mb: 4,
                        }}
                        >
                        <TextField
                            label="Buscar servicio"
                            variant="outlined"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            sx={{ width: { xs: '100%', sm: '80%' } }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ width: { xs: '100%', sm: '20%', backgroundColor: "#02324F" } }}
                        >
                            Buscar
                        </Button>
                    </Box>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
                {/* SECTORES */}
                <Box mb={6}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                        <Typography variant="h5" fontWeight="bold">
                        Sectores
                        </Typography>
                        <MuiLink
                        component={Link}
                        to="/servicios"
                        underline="hover"
                        color="primary"
                        fontWeight="medium"
                        >
                        Ver todos los servicios &gt;
                        </MuiLink>
                    </Box>

                    <Grid container spacing={3}>
                        {categorias.map((cat) => (
                        <Grid item xs={6} sm={4} md={2} key={cat}>
                            <Card
                            component={Link}
                            to={`/categoria/${cat}`}
                            sx={{
                                textDecoration: 'none',
                                textAlign: 'center',
                                p: 2,
                                border: '1px solid #e0e0e0',
                                borderRadius: 2,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                transition: 'transform 0.2s ease-in-out',
                                '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: 3,
                                },
                            }}
                            >
                            {iconMap[cat] || <ApartmentIcon fontSize="large" />}
                            <Typography mt={1} fontWeight="bold" color="text.primary">
                                {cat}
                            </Typography>
                            </Card>
                        </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>

            <Box sx={{ backgroundColor: '#d8e5ed', p: 4, mb:4 }}>
                <Container maxWidth="lg" sx={{ mt: 4, mb: 6,  }}>
                    {/* SERVICIOS DESTACADOS */}
                    <Box mb={6}>
                        <Typography variant="h5" gutterBottom>
                            Servicios destacados
                        </Typography>
                        <Grid container spacing={3}>
                            {destacados.map((tramite) => (
                            <Grid item xs={12} sm={6} md={3} key={tramite.id}>
                                <Card>
                                <CardContent>
                                    <Typography variant="subtitle1" fontWeight="bold">
                                    {tramite.nombre}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    {tramite.descripcion?.slice(0, 80) || 'Descripción no disponible...'}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                    size="small"
                                    component={Link}
                                    to={`/categoria/${tramite.categoria}/tramite/${tramite.id}`}
                                    >
                                    Realizar trámite
                                    </Button>
                                </CardActions>
                                </Card>
                            </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
                {/* SERVICIOS MÁS CONSULTADOS */}
                <Box mb={6}>
                    <Typography variant="h5" gutterBottom>
                        Servicios más consultados
                    </Typography>
                    <Grid container spacing={3}>
                        {masConsultados.map((tramite) => (
                        <Grid item xs={12} sm={6} md={3} key={tramite.id}>
                            <Card>
                                <CardContent>
                                    <Typography variant="subtitle1" fontWeight="bold">
                                    {tramite.nombre}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    {tramite.descripcion?.slice(0, 80) || 'Descripción no disponible...'}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                    size="small"
                                    component={Link}
                                    to={`/categoria/${tramite.categoria}/tramite/${tramite.id}`}
                                    >
                                    Realizar trámite
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    );
  }
  