// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import tramites from "../data/tramites.json";
import Sliderfondo from "../assets/home/sliderfondo.png";
import Sliderdown from "../assets/home/sliderdown.png";

import {
  Box,
  TextField,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Tooltip,
  Button,
  Link as MuiLink,
} from "@mui/material";

import Inscripciones from "../assets/iconos/inscripciones.png";
import Trabajo from "../assets/iconos/trabajo.png";
import Dialogo from "../assets/iconos/dialogo.png";
import ComyTrans from "../assets/iconos/comytrans.png";
import EduCulDep from "../assets/iconos/educultdep.png";
import MedioAmbiente from "../assets/iconos/medioambiente.png";
import Salud from "../assets/iconos/salud.png";
import Energía from "../assets/iconos/energia.png";
import Economia from "../assets/iconos/economia.png";
import AniyVeg from "../assets/iconos/aniyveg.png";
import Vivienda from "../assets/iconos/vivienda.png";
import Migracion from "../assets/iconos/migracion.png";
import Seguridad from "../assets/iconos/seguridad.png";
import Institucion from "../assets/iconos/institucion.png";

import LogoF1 from "../assets/home/LOGOS-01.png";
import LogoF2 from "../assets/home/LOGOS-02.png";

const iconMap = {
  "Inscripciones y Registros": <img src={Inscripciones} alt="Inscripciones y Registros" style={{ width: 60, height: 60 }} />,
  Trabajo: <img src={Trabajo} alt="Trabajo" style={{ width: 60, height: 60 }} />,
  "Mediación y Diálogo": <img src={Dialogo} alt="Mediación y Diálogo" style={{ width: 60, height: 60 }} />,
  "Comunicaciones y Transporte": <img src={ComyTrans} alt="Comunicación y Transporte" style={{ width: 60, height: 60 }} />,
  "Educación, Cultura y Deporte": <img src={EduCulDep} alt="Educación, Cultura y Deporte" style={{ width: 60, height: 60 }} />,
  "Medio Ambiente": <img src={MedioAmbiente} alt="Medio Ambiente" style={{ width: 60, height: 60 }} />,
  Salud: <img src={Salud} alt="Salud" style={{ width: 60, height: 60 }} />,
  Energía: <img src={Energía} alt="Energía" style={{ width: 60, height: 60 }} />,
  Economía: <img src={Economia} alt="Economía" style={{ width: 60, height: 60 }} />,
  "Manejo de Animales y Vegetales": <img src={AniyVeg} alt="Manejo de Animales y Vegetales" style={{ width: 60, height: 60 }} />,
  "Territorio, Vivienda e Infraestructura": <img src={Vivienda} alt="Territorio, Vivienda e Infraestructura" style={{ width: 60, height: 60 }} />,
  "Servicios de Migración": <img src={Migracion} alt="Servicios de Migración" style={{ width: 60, height: 60 }} />,
  Seguridad: <img src={Seguridad} alt="Seguridad" style={{ width: 60, height: 60 }} />,
};

export default function Home() {
  useEffect(() => {
    document.title = "Inicio | Trámites de Guatemala";
  }, []);

  const categorias = [...new Set(tramites.map((t) => t.categoria))];
  const instituciones = [...new Set(tramites.map((t) => t.institucion))];

  const destacados = tramites.slice(0, 5);

  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/servicios?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <>
      {/* HERO */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#d9e4ed",
          color: "white",
          pt: { xs: 8, md: 12 },
          textAlign: "center",
          px: 2,
        }}
      >
        <Container maxWidth="xl">
          <Container maxWidth="lg"  sx={{ mb: {xs: 0, md: -5}}}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ fontWeight: "bold"}}
            >
              Observatorio de Trámites de Guatemala
            </Typography>
            <Typography variant="p">
              Accede a la información, pasos y requisitos de los trámites públicos
              nacionales y municipales en un solo lugar.
            </Typography>
          </Container>
          <img
            src={Sliderdown}
            alt="Slider Image"
            style={{ width: "100%", height: "auto" }}
          />
          <Container maxWidth="lg" sx={{ mt: {xs: 0, md: -10}, pb: 7 }}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                my: 4,
              }}
            >
              <TextField
                label="Buscar servicio"
                variant="outlined"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                sx={{ width: { xs: "100%", sm: "80%", backgroundColor: "#fff" } }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: { xs: "100%", sm: "20%", backgroundColor: "#0089DF" },
                  textTransform: "Capitalize",
                }}
              >
                Buscar
              </Button>
            </Box>
          </Container>
        </Container>
      </Box>

      {/* CONTENIDO PRINCIPAL */}

      <Container maxWidth="xl" sx={{ my: 10 }}>
        {/* SECTORES */}
        <Box mb={6}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={4}
          >
            <Box display={"block"}>
              <Typography variant="h5" fontWeight="bold">
                Categorías
              </Typography>
              <div style={{ backgroundColor: "#088cdc", width: "120px", height: "5px", marginTop: "15px" }}></div>
            </Box>
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

          <Grid container spacing={2}>
            {categorias.map((cat) => (
              <Grid
                key={cat}
                size={{ xs: 6, sm: 4, md: 2 }}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Card
                  component={Link}
                  to={`/categoria/${cat}`}
                  sx={{
                    width: '100%',
                    height: 160,
                    textDecoration: 'none',
                    textAlign: 'center',
                    p: 2,
                    border: '1px solid #cfd8dc',
                    borderRadius: 2,
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
                  <Typography mt={1} fontWeight="bold" fontSize="0.9rem">
                    {cat}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* SERVICIOS DESTACADOS */}
      <Box sx={{ backgroundColor: "#d8e5ed", p: 4, mb: 4 }}>
        <Container maxWidth="xl" sx={{ mt: 4, mb: 6 }}>
          <Box mb={6}>
            <Typography variant="h5" gutterBottom mb={2}>
              Trámites destacados
            </Typography>
            <div style={{ backgroundColor: "#088cdc", width: "120px", height: "5px", marginTop: "15px", marginBottom: "40px" }}></div>

            <Grid container spacing={3} size={{ xs: 12, sm: 12, md: 12 }}>
              {/* IZQUIERDA - Trámite principal */}
              {destacados[0] && (
                <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
                  <Box
                    sx={{
                      bgcolor: "white",
                      p: 3,
                      borderRadius: 3,
                      boxShadow: 2,
                      display: "flex",
                      gap: 2,
                      alignItems: "flex-start",
                      minHeight: "100%",
                    }}
                  >
                    {/* Icono o imagen del sector */}
                    <Box sx={{ minWidth: 80, paddingTop: 6, paddingLeft: 6 }}>{iconMap[destacados[0].categoria]}</Box>

                    {/* Contenido */}
                    <Box sx={{ display: "flex", flexDirection: "column", flex: 1, padding: 6 }}>
                      <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ lineHeight: 1.2 }}>
                        {destacados[0].nombre}
                      </Typography>
                      <Tooltip title={destacados[0].descripcion || 'Descripción no disponible...'} arrow>
                        <Typography
                          variant="body2"
                          color="#02324f"
                          sx={{
                            display: '-webkit-box',
                            WebkitLineClamp: 12,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {destacados[0].descripcion || 'Descripción no disponible...'}
                        </Typography>
                      </Tooltip>
                      <Box mt={2}>
                        <Button
                          variant="contained"
                          size="small"
                          component={Link}
                          to={`/categoria/${destacados[0].categoria}/tramite/${destacados[0].id}`}
                          sx={{
                            textTransform: 'none',
                            borderRadius: '15px',
                            padding: '8px 20px',
                            fontWeight: 500,
                            boxShadow: 'none',
                            bgcolor: '#0089df',
                            '&:hover': { boxShadow: 'none' }
                          }}
                        >
                          Ver Trámite
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              )}

              {/* DERECHA - Otros 4 trámites en cuadrícula 2x2 con ícono al lado del título */}
              <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
                <Grid container spacing={2}>
                  {destacados.slice(1, 5).map((tramite) => (
                    <Grid item size={{ xs: 12, sm: 6, md: 6 }} key={tramite.id}>
                      <Box
                        sx={{
                          bgcolor: 'white',
                          p: 2,
                          borderRadius: 2,
                          boxShadow: 1,
                          display: 'flex',
                          flexDirection: 'column',
                          height: '100%',
                          minHeight: 220,
                        }}
                      >
                        {/* Título con ícono al lado */}
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Box sx={{ mr: 1 }}>{iconMap[tramite.categoria]}</Box>
                          <Tooltip title={tramite.nombre} arrow>
                            <Typography
                              variant="subtitle1"
                              fontWeight="bold"
                              sx={{
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                lineHeight: 1.2
                              }}
                            >
                              {tramite.nombre}
                            </Typography>
                          </Tooltip>
                        </Box>

                        {/* Descripción */}
                        <Tooltip title={tramite.descripcion || 'Descripción no disponible...'} arrow>
                          <Typography
                            variant="body2"
                            color="#02324f"
                            sx={{
                              display: '-webkit-box',
                              WebkitLineClamp: 4,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              mb: 2,
                              flex: 1 // Esto empuja el botón hacia abajo
                            }}
                          >
                            {tramite.descripcion || 'Descripción no disponible...'}
                          </Typography>
                        </Tooltip>

                        {/* Link */}
                        <Button
                          variant="contained"
                          size="small"
                          component={Link}
                          to={`/categoria/${tramite.categoria}/tramite/${tramite.id}`}
                          sx={{
                            textTransform: 'none',
                            borderRadius: '15px',
                            padding: '8px 20px',
                            fontWeight: 500,
                            boxShadow: 'none',
                            bgcolor: '#0089df',
                            width: 'fit-content',
                            mt: 'auto', // Esto asegura que el botón quede abajo
                            '&:hover': { boxShadow: 'none' }
                          }}
                        >
                          Ver Trámite
                        </Button>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* INSTITUCIONES */}
      <Container maxWidth="xl" sx={{ mt: 8, mb: 8 }}>
        <Box mb={6}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={4}
          >
            <Box display={"block"}>
              <Typography variant="h5" fontWeight="bold">
                Instituciones
              </Typography>
              <div style={{ backgroundColor: "#088cdc", width: "120px", height: "5px", marginTop: "15px" }}></div>
            </Box>
            <MuiLink
              component={Link}
              to="/servicios"
              underline="hover"
              color="primary"
              fontWeight="medium"
            >
              Ver todas las Instituciones &gt;
            </MuiLink>
          </Box>

          <Grid container spacing={2}>
            {instituciones.slice(0,8).map((inst) => (
              <Grid
                key={inst}
                size={{ xs: 6, sm: 6, md: 3 }}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Card
                  component={Link}
                  to={`/institucion/${inst}`}
                  sx={{
                    width: '100%',
                    height: 160,
                    textDecoration: 'none',
                    border: '1px solid #cfd8dc',
                    borderRadius: 2,
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 3,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                      p: 2,
                      textAlign: 'center',
                    }}
                  >
                    <img src={Institucion} alt="Institucion" style={{ width: 60, height: 60 }} />
                    <Typography fontWeight="bold">
                      {inst}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* LOGOS COLABORADORES */}
      <Container maxWidth="xl" sx={{ mt: 8, mb: 8 }}>
        <Box mb={6} display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h5" color="#02324f" align="center" marginBottom={4} maxWidth={1000}>
           Gracias al apoyo de:
          </Typography>
          <Box display="flex" justifyContent="center" alignItems="center" gap={6} mb={3}>
            <img
              src={LogoF1}
              alt="Comision Europea"
              style={{ height: 80, objectFit: "contain" }}
            />
            <img
              src={LogoF2}
              alt="Indico Global"
              style={{ height: 80, objectFit: "contain" }}
            />
          </Box>
          <Typography variant="body2" color="#02324f" align="center" maxWidth={1300}>
            Enhancing Digital Government in Guatemala through European Standards" - Red Ciudadana, is one of the beneficiaries of a grant under the first Open Call under InDiCo-Global, which is a project funded as part of the European Union's Horizon Europe Research and Innovation Programme under Grant Agreement No 101136022. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union. Neither the European Union nor the granting authority can be held responsible for them.
          </Typography>
        </Box>
      </Container>

    </>
  );
}
