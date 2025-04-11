import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import tramites from '../data/tramites.json';

import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Pagination,
} from '@mui/material';

export default function Servicios() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const itemsPerPage = 9;

  useEffect(() => {
    document.title = 'Servicios | Trámites de Guatemala';
  }, []);

  const normalizeText = (text) =>
    text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

  const filteredTramites = tramites.filter((t) =>
    normalizeText(t.nombre).includes(normalizeText(search))
  );

  const totalPages = Math.ceil(filteredTramites.length / itemsPerPage);
  const currentItems = filteredTramites.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const queryParam = params.get('query') || '';
    setSearch(queryParam);
  }, [location.search]);

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Lista de Servicios Disponibles
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={3}>
                Estos son todos los trámites disponibles actualmente en la plataforma.
            </Typography>

            {/* Buscador */}
            <TextField
                fullWidth
                label="Buscar trámite por nombre"
                variant="outlined"
                value={search}
                onChange={handleSearchChange}
                sx={{ mb: 4 }}
            />

            {/* Lista de servicios o mensaje de no encontrados */}
            {filteredTramites.length === 0 ? (
                <Typography variant="body1" color="error">
                No se encontraron trámites con ese criterio de búsqueda.
                </Typography>
            ) : (
                <>
                <Grid container spacing={3}>
                    {currentItems.map(({ id, nombre, descripcion, categoria }) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" fontWeight="bold" gutterBottom>
                                {nombre}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                {descripcion?.slice(0, 120) || 'Descripción no disponible.'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                size="small"
                                component={Link}
                                to={`/categoria/${categoria}/tramite/${id}`}
                                >
                                Ver trámite
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    ))}
                </Grid>

                {/* Paginación */}
                {totalPages > 1 && (
                    <Pagination
                    count={totalPages}
                    page={page}
                    onChange={(e, value) => setPage(value)}
                    sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}
                    />
                )}
                </>
            )}
        </Container>
    );
}
