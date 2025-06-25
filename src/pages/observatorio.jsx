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


import LogoF1 from "../assets/home/LOGOS-01.png";
import LogoF2 from "../assets/home/LOGOS-02.png";


export default function Observatirui() {
  useEffect(() => {
    document.title = "Observatorio | Trámites de Guatemala";
  }, []);

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
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ fontWeight: "bold", pb: 20, pt: 10}}
            >
              Observatorio de Trámites
            </Typography>
          </Container>
        </Container>
      </Box>

      {/* CONTENIDO PRINCIPAL */}
      <Container maxWidth="xl" sx={{ mt: 8, mb: 8 }}>
        <Box mb={6} display="flex" flexDirection="column" alignItems="center">
          <Grid container spacing={4}>
            <Grid size={{ xs: 6, sm: 12, md: 6 }}>
          
              <Typography variant="h5" gutterBottom>
                ¿Qué es el Observatorio de Trámites?
              </Typography>
              <Typography variant="body1">
                El Observatorio de Trámites es una herramienta que permite visualizar, analizar y monitorear los trámites públicos en Guatemala. Su objetivo es promover la transparencia, eficiencia y mejora continua en la gestión de trámites gubernamentales.
              </Typography>

            </Grid>
            <Grid size={{ xs: 6, sm: 12, md: 6 }}>
              <img
                src={Sliderdown}
                alt="Slider Image"
                style={{ width: "100%", height: "auto" }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container maxWidth="xl" sx={{ mt: 8, mb: 8 }}>
        <Box mb={6} display="flex" flexDirection="column" alignItems="center">
          <Grid container spacing={4}>
            <Grid size={{ xs: 6, sm: 12, md: 6 }} order={{ xs: 1, md: 2 }}>
          
              <Typography variant="h5" gutterBottom>
                ¿Qué medimos?
              </Typography>
              <Typography variant="body1">
                El Observatorio de Trámites es una herramienta que permite visualizar, analizar y monitorear los trámites públicos en Guatemala. Su objetivo es promover la transparencia, eficiencia y mejora continua en la gestión de trámites gubernamentales.
              </Typography>

            </Grid>
            <Grid size={{ xs: 6, sm: 12, md: 6 }} order={{ xs: 2, md: 1 }}>
              <img
                src={Sliderdown}
                alt="Slider Image"
                style={{ width: "100%", height: "auto" }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container maxWidth="xl" sx={{ mt: 8, mb: 8 }}>
        <Box mb={6} display="flex" flexDirection="column" alignItems="center">
          <Grid container spacing={4}>
            <Grid size={{ xs: 6, sm: 12, md: 6 }}>
          
              <Typography variant="h5" gutterBottom>
                ¿Cómo lo medimos? 
              </Typography>
              <Typography variant="body1">
                El Observatorio de Trámites es una herramienta que permite visualizar, analizar y monitorear los trámites públicos en Guatemala. Su objetivo es promover la transparencia, eficiencia y mejora continua en la gestión de trámites gubernamentales.
              </Typography>

            </Grid>
            <Grid size={{ xs: 6, sm: 12, md: 6 }}>
              <img
                src={Sliderdown}
                alt="Slider Image"
                style={{ width: "100%", height: "auto" }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* LOGOS COLABORADORES */}
      <Container maxWidth="xl" sx={{ mt: 8, mb: 8 }}>
        <Box mb={6} display="flex" flexDirection="column" alignItems="center">
          <iframe
            title="Observatorio Flourish Visualisation"
            src="https://public.flourish.studio/visualisation/23924721/"
            style={{ width: "100%", height: "600px", border: "none" }}
            allowFullScreen
          />
        </Box>
      </Container>

    </>
  );
}
