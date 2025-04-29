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
  Button,
  Link as MuiLink,
} from "@mui/material";

import Masonry from "@mui/lab/Masonry";

import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";

import Trabajo from "../assets/iconos/trabajo.png";
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

const iconMap = {
  "Inscripciones y Registros": <AssignmentTurnedInIcon fontSize="large" />, // faltaaaaa
  Trabajo: <img src={Trabajo} alt="Trabajo" style={{ width: 60, height: 60 }} />,
  "Mediación y Diálogo": <RecordVoiceOverIcon fontSize="large" />, // faltaaaa
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

  const destacados = tramites.slice(0, 4);
  const masConsultados = tramites.slice(4, 12);

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
          backgroundImage: `url(${Sliderfondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white",
          pt: { xs: 8, md: 12 },
          textAlign: "center",
          px: 2,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold", color: "rgba(255,255,255,1)" }}
          >
            Observatorio de Trámites de Guatemala
          </Typography>
          <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.9)" }}>
            Accede a la información, pasos y requisitos de los trámites públicos
            nacionales y municipales en un solo lugar.
          </Typography>
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
              }}
            >
              Buscar
            </Button>
          </Box>
        </Container>
        <img
          src={Sliderdown}
          alt="Slider Image"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>

      {/* CONTENIDO PRINCIPAL */}

      <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
        {/* SECTORES */}
        <Box mb={6}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={4}
          >
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

          <Masonry columns={{ xs: 1, sm: 5, md: 5 }} spacing={2}>
            {categorias.map((cat) => (
              <Card
                key={cat}
                component={Link}
                to={`/categoria/${cat}`}
                sx={{
                  textDecoration: "none",
                  textAlign: "center",
                  p: 2,
                  border: "1px solid #e0e0e0",
                  borderRadius: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 3,
                  },
                }}
              >
                {iconMap[cat] || <ApartmentIcon fontSize="large" />}
                <Typography mt={1} fontWeight="bold" color="text.primary">
                  {cat}
                </Typography>
              </Card>
            ))}
          </Masonry>
        </Box>
      </Container>

      {/* SERVICIOS DESTACADOS */}
      <Box sx={{ backgroundColor: "#d8e5ed", p: 4, mb: 4 }}>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
          <Box mb={6}>
            <Typography variant="h5" gutterBottom mb={4}>
              Servicios destacados
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 3,
              }}
            >
              {/* IZQUIERDA - Trámite principal */}
              {destacados[0] && (
                <Box
                  sx={{
                    flex: 1,
                    minWidth: 0,
                    bgcolor: "white",
                    p: 2,
                    borderRadius: 2,
                    boxShadow: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {destacados[0].nombre}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ flexGrow: 1 }}
                  >
                    {destacados[0].descripcion ||
                      "Descripción no disponible..."}
                  </Typography>
                  <Box mt={2}>
                    <Button
                      variant="contained"
                      size="medium"
                      component={Link}
                      to={`/categoria/${destacados[0].categoria}/tramite/${destacados[0].id}`}
                    >
                      Realizar trámite
                    </Button>
                  </Box>
                </Box>
              )}

              {/* DERECHA - Otros 3 en Masonry */}
              <Box sx={{ flex: 1 }}>
                <Masonry columns={1} spacing={2}>
                  {destacados.slice(1, 4).map((tramite) => (
                    <Box
                      key={tramite.id}
                      sx={{
                        bgcolor: "white",
                        p: 2,
                        borderRadius: 2,
                        boxShadow: 2,
                      }}
                    >
                      <Typography variant="subtitle1" fontWeight="bold">
                        {tramite.nombre}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 1 }}
                      >
                        {tramite.descripcion?.slice(0, 100) ||
                          "Descripción no disponible..."}
                      </Typography>
                      <Button
                        size="small"
                        component={Link}
                        to={`/categoria/${tramite.categoria}/tramite/${tramite.id}`}
                      >
                        Realizar trámite
                      </Button>
                    </Box>
                  ))}
                </Masonry>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* INSTITUCIONES */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
        <Box mb={6}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={4}
          >
            <Typography variant="h5" fontWeight="bold">
              Instituciones
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

          <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
            {instituciones.map((inst) => (
              <Card
                key={inst}
                component={Link}
                to={`/institucion/${encodeURIComponent(inst)}`}
                sx={{
                  textDecoration: "none",
                  p: 2,
                  border: "1px solid #e0e0e0",
                  borderRadius: 2,
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 3,
                  },
                }}
              >
                <Typography fontWeight="bold" color="text.primary">
                  {inst}
                </Typography>
              </Card>
            ))}
          </Masonry>
        </Box>
      </Container>

      <Box sx={{ backgroundColor: "#d8e5ed", p: 4 }}>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
          {/* SERVICIOS MÁS CONSULTADOS */}
          <Box mb={6}>
            <Typography variant="h5" gutterBottom mb={4}>
              Servicios más consultados
            </Typography>
            <Masonry columns={{ xs: 1, sm: 2, md: 2 }} spacing={2}>
              {masConsultados.map((tramite) => (
                <Card key={tramite.id}>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {tramite.nombre}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {tramite.descripcion?.slice(0, 80) ||
                        "Descripción no disponible..."}
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
              ))}
            </Masonry>
          </Box>
        </Container>
      </Box>
    </>
  );
}
