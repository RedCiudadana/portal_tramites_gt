import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import tramites from '../data/tramites.json';

import {
  Container,
  Typography,
  Grid,
  Card,
  Box,
  TextField,
  Link as MuiLink,
} from '@mui/material';

import Institucion from "../assets/iconos/institucion.png";

export default function Instituciones() {
  const [search, setSearch] = useState('');

  const normalizeText = (text) =>
    text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const instituciones = useMemo(() => {
    const nombresUnicos = new Set();
    tramites.forEach((t) => {
      if (t.institucion) nombresUnicos.add(t.institucion);
    });

    const todas = Array.from(nombresUnicos).sort();
    if (!search) return todas;

    return todas.filter((nombre) =>
      normalizeText(nombre).includes(normalizeText(search))
    );
  }, [search]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Todas las instituciones
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={3}>
        Selecciona una institución para ver sus trámites disponibles.
      </Typography>

      <TextField
        fullWidth
        label="Buscar institución"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 4 }}
      />

      {/* INSTITUCIONES */}

      <Grid container spacing={2}>
        {instituciones.map((inst) => (
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
    </Container>
  );
}
